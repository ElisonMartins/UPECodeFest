import{createTeam, deleteTeam} from "../repositories/team.repository"


//Criar time
export const create = async(req, res) =>{
    try {
        const user = await createTeam(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}

//Deletar time
//Lembrem de deletar os participantes relacionados à essa equipe com a pk , antes de deletar a equipe.
export const deleteTeam = async(req,res) =>{
    try {
        const team = await deleteTeam(Number(req.params.equipeId))
        res.status(200).send()
    } catch (error) {
        res.status(400).send(e)
        console.log(e)
    }
}

