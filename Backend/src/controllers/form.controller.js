import{createForm} from "../repositories/form.repositoey"


//Criar usuário
export const create = async(req, res) =>{
    try {
        const form = await createForm(req.body)
        res.status(200).send()
    } catch (e) {
        res.staus(400).send(e)
    }
}