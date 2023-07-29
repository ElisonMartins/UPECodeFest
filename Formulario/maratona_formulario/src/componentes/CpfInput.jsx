import React from 'react';
import InputMask from 'react-input-mask';

const CpfInput = () => {
  return (
    <InputMask
      mask="999.999.999-99"
      placeholder="Digite o CPF"
      // Outras propriedades que desejar adicionar ao input
    />
  );
};

export default CpfInput;