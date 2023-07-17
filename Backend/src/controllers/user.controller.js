import e from "express"
import{createUser, getAll, getById, deleteUser, deleteAllUsers, getAllById, getEmails} from "../repositories/user.repository"
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

//Deletar usuario por cpf ( não vai ser usado)
export const remove = async(req, res) =>{
   try {
    await deleteUser(req.params.cpf)
    res.status(200).send()
   } catch (e) {
    res.status(400).send(e)
    console.log(e)
   }
}


//Deletar todos usuários que contém o mesmo id da equipe
export const removeAll = async(req,res) =>{
    try {
        await deleteAllUsers(Number(req.params.equipeId))
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}


//Listar todos os usuários que possuem o mesmo id da equipe
//também vai listar o nome que colocaram na equipe
export const getAllById = async(req, res) => {
    try {
        const user = await getAllById(Number(req.params.equipeId))
        res.status(200).send(user)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}

//Listar todos os emails dos usuários que possuem o mesmo id da equipe
export const getAllEmails = async(req,res) =>{
    try {
        const email = await getEmails(Number(req.params.equipeId))
        res.status(200).send(email)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
}