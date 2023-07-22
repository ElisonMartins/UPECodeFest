const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const emailTemplate = require("../views/sendEmailsTemplate");
const pdfTransporter = require("../controllers/createPdf.controller");
const fs = require('fs').promises;
require("dotenv").config();
const { format } = require('date-fns');

const prisma = new PrismaClient();

// Configuração do provedor
// Habilitar 2 step verification e criar um app password no seu provedor de email, antes de rodar a api.

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Função para enviar e-mails com anexos personalizados
const sendEmail = async (to, subject, text, pdfPath) => {
  const mailOptions = {
    from: 'manoeudavi20@gmail.com',
    to: to,
    subject: subject,
    html: text,
    attachments: [
      {
        filename: pdfPath, // Nome do arquivo PDF no anexo
        path: pdfPath, // Caminho para o arquivo PDF personalizado
      },
    ],
  };
  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email com anexo do PDF enviado para ${to}`);
  } catch (error) {
    console.error(`Erro ao enviar email para ${to}: ${error}`);
  }
};

exports.sendEmailsByEquipeId = async (req, res) => {
  const equipeId = Number(req.params.equipeId);

  //Verificar se existe uma equipe com Id fornecido
  try {
    const equipe = await prisma.equipe.findUnique({
      where: {
        id: equipeId,
      },
      select: {
        nomeEquipe: true,
        dataCriacao: true,
        id: true,
      }
    });

    if (!equipe) {
      return res.status(404).send('Equipe não encontrada');
    }

    const userInfo = await prisma.usuario.findMany({
      where: {
        equipeId: equipeId
      },
      select: {
        nome: true,
        cpf: true,
        email: true,
        cursoFaculdade: true,
        periodoFaculdade: true,
        faculdadeNome: true,
      }
    });

    //Mesmo que exista uma equipe, porém nenhum email esteja associado, retornar um erro.
    if (userInfo.length === 0) {
      return res.status(404).send('Nenhum Email encontrado nessa equipe');
    }

    try {
      // Enviar emails para cada usuário da equipe com PDFs personalizados
      const { nomeEquipe, dataCriacao, id } = equipe;
      for (const user of userInfo) {
        
        const formattedDataCriacao = format(dataCriacao, "dd/MM/yyyy - HH:mm:ss");

        const { nome, cpf, email, cursoFaculdade, periodoFaculdade, faculdadeNome } = user;
        const pdfPath = await pdfTransporter(nome, cpf, email, cursoFaculdade, periodoFaculdade, faculdadeNome, nomeEquipe, formattedDataCriacao, id); // Gera o PDF personalizado
        const caminhoDoPdf = `./confirmacao_de_inscrição_${email}.pdf`; // Caminho do PDF gerado na mesma pasta que pdfTransporter
        await sendEmail(email, 'Confirmação de participação', emailTemplate(nome), caminhoDoPdf);
        await fs.unlink(pdfPath); // Exclui o arquivo PDF após o envio do email
        console.log(`PDF ${pdfPath} excluído após o envio do email.`);
      }
      
      await prisma.$disconnect(); // Fechar a conexão com o Prisma após o uso

      res.status(200).send('Emails enviados com sucesso!');
    } catch (error) {
      console.error(`Erro ao enviar o Email: ${error}`);
      res.status(500).send('Erro ao enviar os emails');
    }
  } catch (error) {
    console.error(`Erro ao buscar a equipe: ${error}`);
    res.status(500).send('Erro ao buscar a equipe');
  }
};
