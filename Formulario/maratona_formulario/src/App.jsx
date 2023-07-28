/* eslint-disable react/jsx-key */
//Components
import "./App.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import TeamForm from "./componentes/TeamForm";
import UserForm from "./componentes/UserForm";
import ReviewForm from "./componentes/ReviewForm";
import Steps from "./componentes/Steps";
import Modal from "./componentes/Modal";
//HOOKS
import { useForm } from "./hooks/useForm";
import { useState } from "react";
//AxiosFunctions
import { cadastrar } from "../src/componentes/ReviewForm";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalType, setModalType] = useState(null);

  const formTemplate = {
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    faculdade: "",
    curso: "",
    periodo: "",
  };

  const formTeamTemplate = {
    nomeTeam: "",
    checked: "",
  };

  const handleTeamChange = (name, id) => {
    // Atualize o ID e o nome da equipe selecionada no estado do componente App
    setData((prev) => {
      return { ...prev, equipeId: id, nomeTeam: name  };
    });

    setDataTeam((prev) => {
      return { ...prev, equipeId: id, nomeTeam: name };
    });
  };
  const [data, setData] = useState(formTemplate);
  const [dataTeam, setDataTeam] = useState(formTeamTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });

    setDataTeam((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <TeamForm
      data={dataTeam}
      updateFieldHandler={updateFieldHandler}
      handleTeamChange={handleTeamChange}
    />,
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Formulário de Inscrição</h2>
        <p className="typeMaraton">Maratona de Programação - 2023</p>
        {isModalVisible ? (
          <Modal onClose={() => setIsModalVisible(false)}>
            {modalType === "success" ? (
              <div className="modalInfo">
                <h2>
                  Olá, <label>{data.nome}.</label>
                </h2>
                <p>
                  Sua inscrição na Maratona de Programação 2023 foi realizada
                  com sucesso.
                </p>
                <p>
                  Em alguns instantes, você receberá um e-mail de confirmação no
                  endereço: <label>{data.email}</label>.
                </p>
                <p>
                  Qualquer dúvida ou retificação, entre em contato com o comitê
                  pelo e-mail: <label>maratonaprogupe@gmail.com</label>.
                </p>
              </div>
            ) : modalType === "error" ? (
              <div className="modalInfo">
                <h2>Ops, ocorreu um erro!</h2>
                <p>
                  Não foi possível realizar a inscrição na Maratona de
                  Programação.
                </p>
                <p>
                  Caso você tenha inserido um e-mail ou CPF duplicado, sua
                  inscrição não poderá ser deferida.
                </p>
                <p>
                  Caso o erro não seja esse, por favor, tente novamente mais
                  tarde ou entre em contato com o comitê pelo e-mail:{" "}
                  <label>maratonaprogupe@gmail.com</label>.
                </p>
              </div>
            ) : null}
          </Modal>
        ) : null}
      </div>
      <div className="form_container">
        <Steps currentStep={currentStep} />
        <form
          onSubmit={(evento) => {
            changeStep(currentStep + 1, evento);
          }}
        >
          <div className="inputs_container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submite">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button
                type="button"
                onClick={async function () {
                  const userData = await cadastrar(data);
                  if (userData != undefined) {
                    setIsModalVisible(true);
                    setModalType("success");
                  } else {
                    console.log("Ocorreu um erro");
                    setIsModalVisible(true);
                    setModalType("error");
                  }
                }}
              >
                <span>Confirmar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
