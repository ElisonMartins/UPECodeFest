const fs = require('fs');
const path = require('path');

const imagePath = '../assets/logo.png';

// Conversão do caminho absoluto para relativo
const imageRelativePath = path.resolve(__dirname, imagePath);

// Leitura da imagem como bytes
const imageBytes = fs.readFileSync(imageRelativePath);

// Conversão para base64
const base64Image = imageBytes.toString('base64');

const html = function(nome, cpf, email, cursoFaculdade, periodoFaculdade, faculdadeNome, nomeEquipe, dataCriacao, id ){
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <title>Confirmação de Inscrição - Maratona de Programação</title>
        <style>
            h1 {
                color: #910142;
            }
    
            h2 {
                color: #6c043c;
            }
    
            label,
            p {
                color: #210123;
            }
    
            hr {
                border-color: #0ec0c1;
            }
        </style>
    </head>
    
    <body>
        <div style="text-align: center;">
        <img src="data:image/png;base64,${base64Image}" style="width: 200px; height: auto;" alt="Descrição da imagem">
            <h1>Maratona de Programação</h1>
            <h2>Confirmação de Inscrição</h2>
        </div>
    
        <div style="margin: 20px auto; max-width: 600px;">
            <hr>
    
            <div style="border: 1px solid #0ec0c1; padding: 10px; margin: 10px;">
                <h2 style="text-align: center; font-size: 16px;margin-bottom: 25px; color: #6c043c;">DADOS DO PARTICIPANTE</h2>
                <label style="color: #910142; font-weight: bold;" for="nome">Nome:</label>
                <label style="color: #910142;">${nome}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="cpf">CPF:</label>
                <label style="color: #910142;">${cpf}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="email">Email:</label>
                <label style="color: #910142;">${email}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="curso">Curso:</label>
                <label style="color: #910142;">${cursoFaculdade}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="periodo">Período do Curso:</label>
                <label style="color: #910142;">${periodoFaculdade}º</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="campus">Campus:</label>
                <label style="color: #910142;">${faculdadeNome}</label>
            </div>
    
            <div style="border: 1px solid #0ec0c1; padding: 10px; margin: 10px;">
                <h2 style="text-align: center;font-size: 16px;margin-bottom: 25px; color: #6c043c;">DADOS DA EQUIPE</h2>
                <label style="color: #910142;font-weight: bold;" for="nome_equipe">Nome da Equipe:</label>
                <label style="color: #910142;">${nomeEquipe}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="data_criacao_equipe">Data de Criação da Equipe:</label>
                <label style="color: #910142;">${dataCriacao}</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="id_equipe">ID da Equipe:</label>
                <label style="color: #910142;">${id}</label>
            </div>
    
            <div style="border: 1px solid #0ec0c1; padding: 10px; margin: 10px;">
                <h2 style="text-align: center;font-size: 16px;margin-bottom: 25px; color: #6c043c;">INFORMAÇÕES SOBRE A MARATONA</h2>
                <label style="color: #910142;font-weight: bold;" for="data_maratona">Data da Maratona:</label>
                <label style="color: #910142;">20/11/2020</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="horario_maratona">Horário:</label>
                <label style="color: #910142;">9:30 am</label>
                <br>
                <label style="color: #910142;font-weight: bold;" for="endereco_maratona">Endereço:</label>
                <label style="color: #910142;">Rua heitor Vila Lobos</label>
            </div>
    
            <div style="border: 1px solid #0ec0c1; padding: 10px; margin: 10px; margin-bottom: 20px;">
                <h2 style="text-align: center;font-size: 16px;margin-bottom: 25px; color: #6c043c;">OUTRAS INFORMAÇÕES</h2>
                <p style="color: #910142;"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla imperdiet nulla eu est congue, id posuere
                    justo
                    posuere. Ut non est ut purus euismod aliquam. In hac habitasse platea dictumst. In ac purus vitae felis
                    congue
                    tincidunt. Integer ac est enim. Integer nec orci eget ante hendrerit scelerisque.</p>
            </div>
        </div>
    </body>
    
    </html>
    `
}

module.exports = html