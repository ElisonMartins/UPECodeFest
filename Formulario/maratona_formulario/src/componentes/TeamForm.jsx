/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TeamForm = ({data,updateFieldHandler, handleTeamChange}) => {
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

  return (
    <div>
      <div className="form_control">
        <label className="teamName" htmlFor="nomeTeam">Equipe:</label>
        <select className="select_groupe"
          name="nomeTeam"
          id="team"
          required
          value={data.nomeTeam || ""}
          onChange={(e) => {
            const name = e.target.value; // Nome da equipe selecionada
            const selectedTeam = teamNames.find((team) => team.name === name);
            const id = selectedTeam ? selectedTeam.id : null; // ID da equipe selecionada
            handleTeamChange(name, id); // Chama a função handleTeamChange passando o nome e o ID da equipe selecionada
            updateFieldHandler("nomeTeam", name); // Atualiza o nome da equipe no estado do componente App
          }}
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
      </div>
      <div className="review-group">
       
      </div>
    </div>
  );
};

export default TeamForm;
