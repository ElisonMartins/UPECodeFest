/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import "./Steps.css"
import {AiOutlineUser, AiOutlineTeam} from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

const Steps = ({currentStep}) => {
  return (
    <div className='steps'>
        <div className="step active">
            <AiOutlineTeam/>
            <p>Entrar na Equipe</p>
        </div>
        <div className={`step ${currentStep >=1 ? "active": ""}`}>
            <AiOutlineUser/>
            <p>Fazer Cadastro</p>
        </div>
        <div className={`step ${currentStep >=2 ? "active": ""}`}>
            <FiSend/>
            <p>Finalizar</p>
        </div>
    </div>
  )
}

export default Steps