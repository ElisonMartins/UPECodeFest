import userRoutes from "./user.routes";
import teamRoutes from "./team.routes";

const routes = app =>{
    userRoutes(app)
    teamRoutes(app)
}

export default routes