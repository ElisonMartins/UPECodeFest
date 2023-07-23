"use client";// pages/index.tsx
// pages/index.tsx
import React, { useState } from 'react';

type Participant = {
  nome: string;
  email: string;
  cpf: string;
  celular: string;
  curso: 'Sim' | 'Não';
  cursoEspecifico?: string;
  cursoFaculdade: string;
  nomeFaculdade: string;
  periodo: string;
};

const MaratonaForm: React.FC = () => {
  const [teamName, setTeamName] = useState('');
  const [participants, setParticipants] = useState<Participant[]>([{
    curso: 'Não' // Começa marcado como "Não"
  }]);
  const [errorFields, setErrorFields] = useState<number[]>([]);

  const addParticipant = () => {
    if (participants.length < 5) {
      setParticipants([...participants, {
        curso: 'Não' // Novo participante também começa marcado como "Não"
      }]);
    }
  };

  const handleSubmit = () => {
    setErrorFields([]);
    const invalidFields: number[] = [];

    // Validar se o campo "Nome da Equipe" foi preenchido
    if (!teamName) {
      alert('Por favor, preencha o campo "Nome da Equipe" antes de enviar a inscrição.');
      return;
    }

    participants.forEach((participant, index) => {
      if (!participant.nome || !participant.email || !participant.cpf || !participant.celular || !participant.cursoFaculdade || !participant.nomeFaculdade || !participant.periodo) {
        invalidFields.push(index);
      }
    });

    if (invalidFields.length === 0) {
      // Enviar a inscrição
      alert('Inscrição enviada com sucesso!');
      setParticipants([{
        curso: 'Não' // Após envio, reinicia com o campo "Participar do curso" marcado como "Não"
      }]);
      setTeamName(''); // Limpar o campo "Nome da Equipe" após enviar a inscrição
    } else {
      setErrorFields(invalidFields);
      const errorMessage = `Por favor, preencha todos os campos corretamente para enviar a inscrição.`;
      alert(errorMessage);
    }
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Formulário de Inscrição - Maratona de Programação</h1>
      <div className="mb-2">
        <label htmlFor="teamName">Nome da Equipe:</label>
        <input
          type="text"
          id="teamName"
          className="w-full border rounded-md px-2 py-1"
          placeholder="Digite o nome da equipe"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />
      </div>
      {participants.map((participant, index) => (
        <div key={index} className="border rounded-lg p-4 my-4 w-96">
          <h2 className="text-xl font-semibold mb-2">Participante {index + 1}</h2>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`nome${index}`}>Nome:</label>
            <input
              type="text"
              id={`nome${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o nome"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].nome = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`email${index}`}>Email:</label>
            <input
              type="email"
              id={`email${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o email"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].email = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`cpf${index}`}>CPF:</label>
            <input
              type="text"
              id={`cpf${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o CPF"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].cpf = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`celular${index}`}>Celular:</label>
            <input
              type="tel"
              id={`celular${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o celular (DDD) 9xxxx-xxxx"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].celular = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`curso${index}`}>Participará do curso oferecido pela equipe?</label>
            <select
              id={`curso${index}`}
              className="w-full border rounded-md px-2 py-1"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].curso = e.target.value as 'Sim' | 'Não';
                  return updatedParticipants;
                });
              }}
              value={participant.curso}
            >
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
            </select>
          </div>
          {participant.curso === 'Sim' && (
            <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
              <label htmlFor={`cursoEspecifico${index}`}>Qual curso?</label>
              <select
                id={`cursoEspecifico${index}`}
                className="w-full border rounded-md px-2 py-1"
                onChange={(e) => {
                  setParticipants((prevParticipants) => {
                    const updatedParticipants = [...prevParticipants];
                    updatedParticipants[index].cursoEspecifico = e.target.value;
                    return updatedParticipants;
                  });
                }}
              >
                <option value="">Selecione</option>
                <option value="JavaScript">JavaScript</option>
                <option value="Flutter">Flutter</option>
              </select>
            </div>
          )}
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`cursoFaculdade${index}`}>Nome do curso da faculdade:</label>
            <input
              type="text"
              id={`cursoFaculdade${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o nome do curso da faculdade"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].cursoFaculdade = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`nomeFaculdade${index}`}>Qual faculdade?</label>
            <input
              type="text"
              id={`nomeFaculdade${index}`}
              className="w-full border rounded-md px-2 py-1"
              placeholder="Digite o nome da faculdade"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].nomeFaculdade = e.target.value;
                  return updatedParticipants;
                });
              }}
            />
          </div>
          <div className={`mb-2 ${errorFields.includes(index) ? 'border-red-500' : ''}`}>
            <label htmlFor={`periodo${index}`}>Período:</label>
            <select
              id={`periodo${index}`}
              className="w-full border rounded-md px-2 py-1"
              onChange={(e) => {
                setParticipants((prevParticipants) => {
                  const updatedParticipants = [...prevParticipants];
                  updatedParticipants[index].periodo = e.target.value;
                  return updatedParticipants;
                });
              }}
            >
              <option value="">Selecione</option>
              <option value="1º">1º</option>
              <option value="2º">2º</option>
              <option value="3º">3º</option>
              <option value="4º">4º</option>
              <option value="5º">5º</option>
              <option value="6º">6º</option>
              <option value="7º">7º</option>
              <option value="8º">8º</option>
              <option value="9º">9º</option>
              <option value="10º">10º</option>
            </select>
          </div>
        </div>
      ))}
      <button
        onClick={addParticipant}
        className="bg-blue-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-blue-600"
      >
        Adicionar Participante
      </button>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-green-500 text-white font-semibold rounded-md px-4 py-2 hover:bg-green-600"
      >
        Enviar Inscrição
      </button>
    </div>
  );
};

export default MaratonaForm;
