import{create, get,getId, remove, removeAll, getAllById, getAllEmails, } from "../controllers/user.controller"


const userRoutes = app =>{
    //cadastrar usuário
    app.post("/user/create", create)

    //listar todos os usuários
    app.get("/user/get/all", get)

    //listar usuario por id ( não vai ser usado)
    app.get("/user/get/bycpf/:cpf", getId)

    //Deletar usuario por cpf ( não vai ser usado)
    app.delete("/user/delete/bycpf/:cpf", remove)

    //Deletar todos usuários que contém o mesmo id da equipe
    app.delete("/user/deleteall/:equipeId", removeAll)

    //Listar todos os usuários que possuem o mesmo id da equipe
    app.get("/user/get/allbyid/:equipeId", getAllById)

    //Listar todos os emails dos usuários que possuem o mesmo id da equipe
    app.get("/user/getemail/:equipeId", getAllEmails)

}
 export default userRoutes

