import e from "express"
import{createUser, getAll, getById} from "../repositories/user.repository"
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
        console.log(e)
    }
}

//Listar todos os usuários
export const get = async (req, res) =>{
    try {
        const users = await getAll()
        res.status(200).send(users)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}

//Listar usuário por cpf (não vai ser usado)
export const getId = async(req, res) => {
    try {
        const user = await getById(req.params.cpf)
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}


