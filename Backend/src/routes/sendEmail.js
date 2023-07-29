import {sendEmailParticipante} from "../controllers/sendEmail.controller"

const emails = app =>{
    app.get('/emails/:cpf',sendEmailParticipante);
}

export default emails
