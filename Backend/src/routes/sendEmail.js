import {sendEmailsByEquipeId} from "../controllers/sendEmail.controller"

const emails = app =>{
    app.get('/emails/:equipeId',sendEmailsByEquipeId);
}

export default emails
