import userRoutes from "./user.routes";
import teamRoutes from "./team.routes";
import emails from "./sendEmail";

const routes = app =>{
    userRoutes(app)
    teamRoutes(app)
    emails(app)
}

export default routes