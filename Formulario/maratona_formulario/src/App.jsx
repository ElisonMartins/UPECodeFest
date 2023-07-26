/* eslint-disable react/jsx-key */
//Components
import './App.css'
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import{FiSend} from 'react-icons/fi'
import TeamForm from './componentes/TeamForm';
import UserForm from './componentes/UserForm';
import ReviewForm from './componentes/ReviewForm';
import Steps from './componentes/Steps';
//HOOKS 
import { useForm } from './hooks/useForm';
import { useState } from 'react';
//AxiosFunctions
import{cadastrar} from '../src/componentes/ReviewForm'


function App() {

  const formTemplate = {
    nome: "",
    email: "",
    cpf: "",
    celular: "",
    faculdade: "",
    curso:"",
    periodo:"",
  }

  const formTeamTemplate = {
    nomeTeam:"",
  }

  const handleTeamChange = (name, id) => {
    // Atualize o ID da equipe selecionada no estado do componente App
    setData((prev) => {
      return { ...prev, equipeId: id };
    });

    setDataTeam((prev) =>{
      return {...prev, equipeId:id}
    })
  };
  const [data, setData] = useState(formTemplate)
  const [dataTeam, setDataTeam] = useState(formTeamTemplate)

  const updateFieldHandler = (key,value) =>{
    setData((prev) => {
      return{...prev, [key]: value}
    })

    setDataTeam((prev) =>{
      return {...prev, [key]:value}
    })
  }

  const formComponents = 
  [
  <TeamForm data={dataTeam} 
  updateFieldHandler={updateFieldHandler}
  handleTeamChange={handleTeamChange} 
  
  />, 
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>, 
  <ReviewForm data={data}/> 
]

  const {currentStep,currentComponent, changeStep, isLastStep, isFirstStep} = useForm(formComponents)

  return (
   
      <div className='app'>
        <div className='header'>
          <h2>Formulário de Inscrição</h2>
          <p>Maratona de Programação - 2023</p>
        </div>
        <div className="form_container">

          <Steps currentStep={currentStep}/>
          <form onSubmit={(evento)=>{
            changeStep(currentStep + 1, evento)
          }}>
            <div className="inputs_container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && <button type='button' onClick={()=> changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
              </button>}
            {!isLastStep ? (
                <button type='submite'>
                <span>Avançar</span>
                <GrFormNext/>
              </button>
            ) : (
              <button type='button' onClick={()=> cadastrar(data, dataTeam)}>
              <span>Confirmar</span>
              <FiSend/>
            </button>
            )}
            </div>
          </form>

        </div>
      </div>
    
  )
}

export default App
