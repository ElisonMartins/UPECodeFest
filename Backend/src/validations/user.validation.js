import * as yup from "yup"

//Dados obrigatórios
export const userValidation = yup.object({
  cpf: yup.string().required(),
  nome: yup.string().required(),
  email: yup.string().required(),
  celular: yup.string().required(), 
  participarCurso: yup.boolean().required(),
  equipeId: yup.number().required(),
  cursoNome: yup.string().nullable(true)
})