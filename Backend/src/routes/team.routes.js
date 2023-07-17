import{create, deleteTeam} from "../controllers/team.controller"


//cadastrar usuário
const teamRoutes = app =>{
    app.post("/team/create", create)
    app.delete("/team/delete/:equipeId")
}

export default teamRoutes