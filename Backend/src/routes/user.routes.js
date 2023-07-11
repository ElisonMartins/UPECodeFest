import{create} from "../controllers/user.controller"


//cadastrar usuário
const userRoutes = app =>{
    app.post("/user/create", create)
}
 export default userRoutes
