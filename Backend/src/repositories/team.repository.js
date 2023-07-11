import{prisma} from "../services/prisma"

//criar time

export const createTeam = async(data) =>{
    const team = await prisma.equipe.create({
            data
    })
    return team
}

