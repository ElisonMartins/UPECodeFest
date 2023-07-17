import{prisma} from "../services/prisma"

//criar usuário
export const createUser = async(data) =>{
    const user = await prisma.usuario.create({
        data
    })
    return user
}

//Listar todos os usuários
export const getAll = async() =>{
    const user = await prisma.usuario.findMany({})
    return user
}

//Listar usuário por cpf (não vai ser usado)
export const getById = async (cpf) => {
    const user = await prisma.usuario.findUnique({
        where:{
            cpf,
        }
    })
    return user
}