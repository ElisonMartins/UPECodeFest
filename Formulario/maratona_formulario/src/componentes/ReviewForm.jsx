/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

//Axios sendo usado para cadastrar aqui
export const cadastrar = (data)=>{
  try {
   console.log(data)
   alert("Em alguns instantes você receberá um email de confirmação")
  } catch (error) {
   console.log(error)
  }
 }

const ReviewForm = ({data}) => {
  
  return (
    <div className="review_form">
      <h2>Informações do participante </h2>
      <p>
        <label>Nome:</label> {data.nome}
      </p>
      <p>
        <label>Email:</label> {data.email}
      </p>
      <p>
        <label>CPF:</label> {data.cpf}
      </p>
      <p>
        <label>Celular:</label> {data.celular}
      </p>
      <p>
        <label>Curso:</label> {data.curso}
      </p>
      <p>
        <label>Período da Faculdade:</label>{data.periodo}
      </p>
      <p>
        <label>Nome da Equipe Escolhida:</label> {data.nomeTeam}
      </p>

      <p>
        <label>Id da equipe:</label> {data.idTeam}
      </p>

    </div>
  );
};

export default ReviewForm;
