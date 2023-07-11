import{create} from "../controllers/team.controller"


//cadastrar usuário
const teamRoutes = app =>{
    app.post("/team/create", create)
}

export default teamRoutes