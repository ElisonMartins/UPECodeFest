import{create, get} from "../controllers/user.controller"


const userRoutes = app =>{
    //cadastrar usuário
    app.post("/user/create", create)

    //listar todos os usuários
    app.get("/user/get/all", get)
}
 export default userRoutes

