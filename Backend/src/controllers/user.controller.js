import{createUser} from "../repositories/user.repository"
import { prisma } from "../services/prisma"
import {userValidation} from "../validations/user.validation"

//Criar usuário
export const create = async(req, res) =>{
    try {

        //validar os dados antes
        await userValidation.validate(req.body)

        const user = await createUser(req.body)
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
}

//Listar todos os usuários
export const getAll = async() =>{
    const user = await prisma.usuario.findMany({})
    return user
}

