const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const emailTemplate = require("../views/sendEmailsTemplate")
const pdfTransporter = require("../controllers/createPdf.controller")
const fs = require('fs').promises;
require("dotenv").config();


const prisma = new PrismaClient();

// Configuração do provedor
//Habilitar 2 step verification e criar um app password no seu provedor, antes de rodar a api.
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendEmailsByEquipeId = async (req, res) => {
  const equipeId = Number(req.params.equipeId);

  //Verificar se existe uma equipe com Id fornecido
  try {
    const equipe = await prisma.equipe.findUnique({
      where: {
        id: equipeId,
      },
    });

    if (!equipe) {
      return res.status(404).send('Equipe não encontrada');
    }

    const emails = await prisma.usuario.findMany({
      where: {
        equipeId: equipeId,
      },
      select: {
        email: true,
        nome: true,
      },
    });

    //Mesmo que exista uma equipe, porém nenhum email esteja associado, retornar um erro.
    if (emails.length === 0) {
      return res.status(404).send('Nenhum Email encontrado nessa equipe');
    }

    try {
      // Enviar emails para cada usuário da equipe com PDFs personalizados
      for (const user of emails) {
        const { email, nome } = user;
        const pdfPath = await pdfTransporter(nome, email); // Gera o PDF personalizado
        const caminhoDoPdf = `./confirmacao_de_inscrição.pdf`; // Caminho do PDF gerado na mesma pasta que pdfTransporter
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

// Chamar a configuração do e-mail e passar como parâmetro para quem vai ser enviado.
const sendEmail = async (to, subject, text, pdfPath) => {
  const mailOptions = {
    from: 'manoeudavi20@gmail.com',
    to: to,
    subject: subject,
    html: text,
    attachments: [
      {
        filename: 'formulario_inscricao.pdf', // Nome do arquivo PDF no anexo
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
