import{create, get,getId} from "../controllers/user.controller"


const userRoutes = app =>{
    //cadastrar usuário
    app.post("/user/create", create)

    //listar todos os usuários
    app.get("/user/get/all", get)

    //listar usuario por id ( não vai ser usado)
    app.get("/user/get/byid/:cpf", getId)
}
 export default userRoutes

