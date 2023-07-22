var emailTemplate = function(nome){
    return `<h2>Confirmação de Inscrição</h2><p>Olá ${nome} ,
    </p><p>É com grande satisfação que confirmamos a sua inscrição na Maratona de Programação que será realizada em [Data e Local da Maratona].
    </p><p>Essa será uma excelente oportunidade para testar suas habilidades e conhecimentos em programação, além de interagir com outros participantes e aprender muito.
    </p><p>Guarde bem as seguintes informações para o dia do evento:</p><ul><li>Data: [Data da Maratona]
    <p>Se prepare e traga consigo muita disposição e vontade de aprender. Estamos ansiosos para vê-lo(a) lá!</p>
    <p>Caso surja alguma dúvida ou necessite de mais informações ou correções do formulário, não hesite em nos contatar através do email: [Contato da Organização].</p>
    <br>
    <p>Abaixo está um documento comprovatório da sua inscrição. <em>Imprima-o e leve-o no dia da maratona.</em></p>
    `

}
module.exports = emailTemplate;
