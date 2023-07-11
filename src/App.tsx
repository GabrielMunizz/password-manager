import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';
import { FormInfoType, TargetType } from './types/types';

const initialFormValues = {
  nomeDoServico: '',
  login: '',
  senha: '',
  url: '',
};

function App() {
  // Estados para manipulação do form

  const [renderForm, setRenderForm] = useState(false);
  const [formInfo, setFormInfo] = useState<FormInfoType>(initialFormValues);
  // Funções handle

  function handleRenderForm() {
    setRenderForm(true);
  }
  function handleHideForm() {
    setRenderForm(false);
  }
  function handleChange({ target }: TargetType) {
    const { name, value } = target;
    setFormInfo({
      ...formInfo,
      [name]: value,
    });
  }
  return (
    <>
      <Header />
      {renderForm && (<Form
        handleHideForm={ () => handleHideForm() }
        formInfo={ formInfo }
        handleChange={ (event: TargetType) => handleChange(event) }
      />)}
      {!renderForm && (<Button handleRenderForm={ () => handleRenderForm() } />)}
    </>
  );
}

export default App;
