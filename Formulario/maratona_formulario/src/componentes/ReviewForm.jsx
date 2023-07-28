/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import axios from "axios";
import { useState } from "react";

// Função para obter a quantidade de participantes em uma equipe
export const getTeamParticipantsCount = async (equipeId) => {
  try {
    const response = await axios.get(
      `http://localhost:3001/team/get/length/${equipeId}`
    );
    return response.data.numberOfUsers;
  } catch (error) {
    throw new Error("Erro ao obter a quantidade de participantes da equipe.");
  }
};

// Função cadastrar que utiliza a função getTeamParticipantsCount
export const cadastrar = async (data, exibirModal) => {
  try {
    // Verificar se o grupo está cheio
    const participantsCount = await getTeamParticipantsCount(data.equipeId);
    if (participantsCount === 3) {
      return; // Sai da função se o grupo estiver cheio
    }
    // Cadastro de Participante
    const cadastrarUsuario = await axios.post(
      "http://localhost:3001/user/create",
      {
        cpf: data.cpf,
        nome: data.nome,
        email: data.email,
        celular: data.celular,
        equipeId: data.equipeId,
        faculdadeNome: data.faculdade,
        cursoFaculdade: data.curso,
        periodoFaculdade: data.periodo,
      }
    );

    console.log("Usuário cadastrado com sucesso:", cadastrarUsuario.data);

    return cadastrarUsuario.data;
  } catch (error) {
    console.log(error);
  }
};

const ReviewForm = ({ data }) => {
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
        <label>Período da Faculdade:</label>
        {data.periodo}
      </p>
      {data.nomeTeam != "undefined" ? (
        <>
          <p>
            <label>Nome da Equipe Escolhida:</label> {data.nomeTeam}
          </p>

          <p>
            <label>Id da equipe:</label> {data.equipeId}
          </p>
        </>
      ) : (
        <>
          <p>
            <label>Nome da Equipe Escolhida:</label> Participante sem equipe
          </p>
        </>
      )}
    </div>
  );
};

export default ReviewForm;
