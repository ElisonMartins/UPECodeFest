import{create, deleteTeam, get, getTeamLength} from "../controllers/team.controller"


const teamRoutes = app =>{
    //cadastrar time
    app.post("/team/create", create)
    //deletar time
    app.delete("/team/delete/:equipeId")
    app.get("/team/getall/:id", get)
    app.get("/team/get/length/:id", getTeamLength)
}

export default teamRoutes