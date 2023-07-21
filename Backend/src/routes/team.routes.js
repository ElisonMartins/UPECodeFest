import{create, deleteTeam} from "../controllers/team.controller"


const teamRoutes = app =>{
    //cadastrar time
    app.post("/team/create", create)
    //deletar time
    app.delete("/team/delete/:equipeId")
}

export default teamRoutes