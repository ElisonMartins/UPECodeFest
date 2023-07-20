const { PrismaClient } = require('@prisma/client');
const nodemailer = require('nodemailer');
const emailTemplate = require("../templates/sendEmailsTemplate")
require("dotenv").config();


// Configuração do provedor
//Habilitar 2 step verification e criar um app password no seu provedor, antes de rodar a api.
const prisma = new PrismaClient();
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
        nome:true,
      },
    });

    //Mesmo que exista uma equipe, porém nenhum email esteja associado, retornar um erro.
    if (emails.length === 0) {
      return res.status(404).send('Nenhum Email encontrado nessa equipe');
    }

    for (const user of emails) {
      const { email, nome } = user;
      await sendEmail(email, 'Confirmação de participação', emailTemplate(nome));
    }

    await prisma.$disconnect(); // Fechar a conexão com o Prisma após o uso

    res.status(200).send('Emails enviado com sucesso!');
  } catch (error) {
    console.error(`Erro ao enviar o Email: ${error}`);
    res.status(500).send('Erro ao enviar os emails');
  }
};

// Chamar a configuração do e-mail e passar como parâmetro para quem vai ser enviado.
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: 'manoeudavi20@gmail.com',
    to: to,
    subject: subject,
    html: text,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email enviado para ${to}`);
  } catch (error) {
    console.error(`Erro ao enviar email para ${to}: ${error}`);
  }
};
