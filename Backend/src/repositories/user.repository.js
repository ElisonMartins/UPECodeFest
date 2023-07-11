import{prisma} from "../services/prisma"

//criar usuário

export const createUser = async(data) =>{
    const user = await prisma.usuario.create({
        data
    })
    return user
}

