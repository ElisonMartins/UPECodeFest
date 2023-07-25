import { useState } from "react";

export function useForm(steps){
    const [currentStep, setCurrentStep] = useState(0);

    function changeStep(indice, evento){
        if(evento)
        evento.preventDefault()

        if(indice < 0 || indice >= steps.length) return
        setCurrentStep(indice)
        
    }

    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep + 1 == steps.length ? true : false,
        isFirstStep: currentStep == 0 ? true : false,
    }
}