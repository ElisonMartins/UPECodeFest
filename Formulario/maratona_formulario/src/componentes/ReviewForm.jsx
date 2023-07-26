/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

//Axios sendo usado para cadastrar aqui
export const cadastrar = (data)=>{
  try {
   console.log(data)
  } catch (error) {
   console.log(error)
  }
 }

const ReviewForm = ({data}) => {
  
  return (
    <div className="review_form">
      <h2>Informações do participante </h2>
      <p>
        <strong>Nome:</strong> {data.nome}
      </p>
      <p>
        <strong>Email:</strong> {data.email}
      </p>
      <p>
        <strong>CPF:</strong> {data.cpf}
      </p>
      <p>
        <strong>Celular:</strong> {data.celular}
      </p>
      <p>
        <strong>Curso:</strong> {data.curso}
      </p>
      <p>
        <strong>Período da Faculdade:</strong>{data.periodo}
      </p>
      <p>
        <strong>Nome da Equipe Escolhida:</strong> {data.nomeTeam}
      </p>

      <p>
        <strong>Id da equipe:</strong> {data.idTeam}
      </p>

    </div>
  );
};

export default ReviewForm;
