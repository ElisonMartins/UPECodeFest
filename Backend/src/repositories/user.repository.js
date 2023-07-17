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

//Deletar usuario por cpf ( não vai ser usado)
export const deleteUser = async (cpf) =>{
    await prisma.usuario.delete({
        where:
        {
            cpf,
        }
    })
    return
} 

//Deletar todos usuários que contém o mesmo id da equipe
export const deleteAllUsers = async (equipeId) =>{
    const user = await prisma.usuario.deleteMany({
        where:{
            equipeId,
        }
    })
    return
}

//Listar todos os usuários que possuem o mesmo id da equipe
export const getAllById = async (equipeId) => {
    const users = await prisma.usuario.findMany({
      where: {
        equipeId,
      },
      include: { //vai incluir também o nome da equipe
        equipe: {
          select: {
            nome: true,
          },
        },
      },
    });
    return users;
  };
  
//Listar todos os emails dos usuários que possuem o mesmo id da equipe
//Talvez seja usado quando for mandar os emails para os participantes.
export const getEmails = async (equipeId) =>{
  const emails = await prisma.usuario.findMany({
    where:{
      equipeId,
    },
    select:{
      email:true
    }
  })
  return emails
}