/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const TeamForm = ({ data, updateFieldHandler }) => {
  return (
    <div>
      <div className="form_control">
        <label htmlFor="nomeTeam">Nome da Equipe:</label>
        <input
          type="text"
          name="text"
          id="nomeTeam"
          placeholder="Nome da Equipe"
          required
          value={data.nomeTeam || ""}
          onChange={(e) => updateFieldHandler("nomeTeam", e.target.value)}
        />
      </div>
      <div className="form_control">
        <textarea
          name="textos"
          id="textos"
          cols="30"
          rows="8"
          placeholder="Breve descrição da equipe e suas habilidades"
          required
          value={data.textos || ""}
          onChange={(e) => updateFieldHandler("textos", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default TeamForm;
