import{createTeam, deleteTeam, getTeam, getTeamLength} from "../repositories/team.repository"
import {teamValidation} from "../validations/team.validation"


//Criar time
export const create = async(req, res) =>{
    try {
        //validar os dados antes de criar
        await teamValidation.validate(req.body)
        const user = await createTeam(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}

//Buscar Time

export const get = async(req, res) =>{
    try {
        const team = await getTeam(Number(req.params.id))
        res.status(200).send(team)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
    }
}


//Buscae quantidade de participantes em um time 

export const getTeamLength = async(req,res) =>{
    try {
        const teamLength = await getTeamLength(Number(req.params.id))
        res.status(200).send(teamLength)
    } catch (error) {
        res.status(400).send(error)
        console.log(error)
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

