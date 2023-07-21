import{create, deleteTeam} from "../controllers/team.controller"


const teamRoutes = app =>{
    //cadastrar usuário
    app.post("/team/create", create)
    
    app.delete("/team/delete/:equipeId")
}

export default teamRoutes