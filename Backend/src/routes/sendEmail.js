import {sendEmailsByEquipeId} from "../controllers/sendEmail"

const emails = app =>{
    app.get('/emails/:equipeId',sendEmailsByEquipeId);
}

export default emails
