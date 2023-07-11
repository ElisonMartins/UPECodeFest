import{createTeam} from "../repositories/team.repository"


//Criar usuário
export const create = async(req, res) =>{
    try {
        const user = await createTeam(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}