const html = require ("../views/createPdfTemplate")
const pdf = require('html-pdf');

// Opções de configuração para a biblioteca html-pdf
const options = {
    format: 'A4',
    orientation: 'portrait',
};

const pdfTransporter = function (nome) {
    return new Promise((resolve, reject) => {
      const pdfPath = `confirmacao_de_inscrição.pdf`; 
  
      pdf.create(html(nome), options).toFile(pdfPath, function (err, res) {
        if (err) {
          console.error(`Erro ao criar o PDF: ${err}`);
          reject(err);
          return;
        }
        console.log(`PDF criado em: ${res.filename}`);
        resolve(pdfPath); // Resolvendo a Promise com o caminho do PDF após a criação
      });
    });
  };

module.exports = pdfTransporter
