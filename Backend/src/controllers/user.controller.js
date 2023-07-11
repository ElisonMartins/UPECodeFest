import{createUser} from "../repositories/user.repository"


//Criar usuário
export const create = async(req, res) =>{
    try {
        const user = await createUser(req.body)
        res.status(200).send()
    } catch (e) {
        res.staus(400).send(e)
    }
}