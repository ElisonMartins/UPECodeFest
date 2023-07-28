/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";

const TeamForm = ({
  data,
  updateFieldHandler,
  handleTeamChange,
}) => {
  const teamNames = [
    { id: 1, name: "CodeSprinters" },
    { id: 2, name: "BitBusters" },
    { id: 3, name: "AlgoMasters" },
    { id: 4, name: "HackTitans" },
    { id: 5, name: "DevChampions" },
    { id: 6, name: "CodeCrusaders" },
    { id: 7, name: "ByteRacers" },
    { id: 8, name: "CodeWarlords" },
    { id: 9, name: "BitMavericks" },
    { id: 10, name: "ProgSprint" },
  ];

  const [desejaSeguirInscricaoSozinho, setDesejaSeguirInscricaoSozinho] =
    useState(false);

  const handleCheckboxChange = (e) => {
    setDesejaSeguirInscricaoSozinho(e.target.checked);
    
    updateFieldHandler("checked", e.target.checked);

    // Se o checkbox foi marcado, envie true para handleTeamChange e false para updateFieldHandler
    if (e.target.checked) {
      handleTeamChange("undefined", 0);
    }
  };

  const [participantsCount, setParticipantsCount] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    setDesejaSeguirInscricaoSozinho(data.checked);
    //Buscar quantidade de participantes
    const fetchParticipantsCount = async () => {
      try {
        const count = await getTeamParticipantsCount(data.equipeId);
        setParticipantsCount(count);
      } catch (error) {
        console.error(error.message);
        setParticipantsCount("Erro ao obter a quantidade de participantes.");
      }
    };

    //Buscar os usuários da equipe
    const fetchParticipants = async () => {
      
      try {
        const participantsData = await getTeamParticipants(data.equipeId);
        setParticipants(participantsData.usuarios);
      } catch (error) {
        console.error(error.message);
      }
    };

    if (data.equipeId) {
      fetchParticipantsCount();
      fetchParticipants();
    }
  }, [data.equipeId]);

  const getTeamParticipantsCount = async (equipeId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/team/get/length/${equipeId}`
      );
      return response.data.numberOfUsers;
    } catch (error) {
      throw new Error("Erro ao obter a quantidade de participantes da equipe.");
    }
  };

  const getTeamParticipants = async (equipeId) => {
    try {
      const response = await axios.get(
        `http://localhost:3001/team/getall/${equipeId}`
      );
      return response.data;
    } catch (error) {
      throw new Error("Erro ao obter a quantidade de participantes da equipe.");
    }
  };

  return (
    <div>
      <div className="form_control">
        <label className="teamName" htmlFor="nomeTeam">
          Equipe:
        </label>
        <select
          className="select_groupe"
          name="nomeTeam"
          id="team"
          required
          value={data.nomeTeam || ""}
          onChange={(e) => {
            const name = e.target.value;
            const selectedTeam = teamNames.find((team) => team.name === name);
            const id = selectedTeam ? selectedTeam.id : null;
            handleTeamChange(name, id);
            updateFieldHandler("nomeTeam", name);
          }}
          disabled={desejaSeguirInscricaoSozinho}
        >
          <option className="option-select" value="" disabled>
            <label htmlFor="">Escolha uma equipe</label>
          </option>
          {teamNames.map((team) => (
            <option key={team.id} value={team.name}>
              {team.name}
            </option>
          ))}
        </select>
        <div className="check">
          <input
            id="checkbox"
            type="checkbox"
            checked={desejaSeguirInscricaoSozinho}
            onChange={handleCheckboxChange}
          />
          <label className="seguirInscricao" htmlFor="checkbox">
            Desejo seguir a inscrição sem equipe
          </label>
        </div>
      </div>
      <div className="review-group">
        {data.nomeTeam && !desejaSeguirInscricaoSozinho ? (
          <>
            <p>Essa equipe possui {3 - participantsCount} vaga(s):</p>
            <ul>
              {participants.map((participant, index) => (
                <p key={index}>{` ${index + 1 + "º"} ${participant.nome}`}.</p>
              ))}
            </ul>
          </>
        ) : (
          <p></p>
        )}{" "}
        {desejaSeguirInscricaoSozinho ? (
          <>
            <p>
              Ao Prosseguir, você concorda que o comitê poderá alocar você para
              um grupo.
            </p>
          </>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default TeamForm;
