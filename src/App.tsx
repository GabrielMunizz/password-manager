import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Button from './components/Button';
import { FormInfoType, TargetType, FormSubmitEventType } from './types/types';
import { GlobalStyle } from './style/GlobalStyle';
import { StyledMain } from './style/StyledMain.style';
import ServiceDisplay from './components/ServiceDisplay';
import InitialDisplay from './components/InitialDisplay';

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
  const [submitedFormInfo, setSubmitedFormInfo] = useState<FormInfoType[]>([]);
  const [renderInitialDisplay, setInitialDisplay] = useState(true);
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
  function handleSubmit(event: FormSubmitEventType): void {
    event.preventDefault();
    setSubmitedFormInfo([...submitedFormInfo, formInfo]);
    setInitialDisplay(false);
    setFormInfo(initialFormValues);
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledMain>
        {renderForm && (
          <Form
            handleHideForm={ () => handleHideForm() }
            formInfo={ formInfo }
            handleChange={ (event: TargetType) => handleChange(event) }
            handleSubmit={ (event: FormSubmitEventType) => handleSubmit(event) }
          />
        )}
        {renderInitialDisplay && (
          <InitialDisplay />
        )}
        {!renderForm && (<Button handleRenderForm={ () => handleRenderForm() } />)}
        {submitedFormInfo.length > 0 && (
          <ServiceDisplay submitedFormInfo={ submitedFormInfo } />
        )}
      </StyledMain>
    </>
  );
}

export default App;
