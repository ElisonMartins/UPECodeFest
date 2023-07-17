import{prisma} from "../services/prisma"

//Criar time
export const createTeam = async(data) =>{
    const team = await prisma.equipe.create({
            data
    })
    return team
}

//Deletar Time

export const deleteTeam = async(equipeId) =>{
    const team = await prisma.equipe.delete({
        where:{
            equipeId,
        }
    })
    return
}