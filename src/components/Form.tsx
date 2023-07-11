import { useState } from 'react';
import { FormInfoType, TargetType } from '../types/types';
import { StyledButton, StyledRedButton } from '../style/StyledButton.style';
import { StyledForm } from '../style/StyledForm.style';

const regex = /\W|_/;

export type FormProps = {
  handleHideForm: () => void,
  handleChange: (event:TargetType) => void,
  formInfo:FormInfoType,
};

function Form(props: FormProps) {
  const { handleHideForm, formInfo, handleChange } = props;
  const { nomeDoServico, login, senha } = formInfo;
  const [validInputs, setValidInputs] = useState(false);

  function checkInputValues() {
    const nomeDoServicoValido = nomeDoServico.trim() !== '';
    const loginValido = login.trim() !== '';
    const senhaValida = senha.length > 8 && senha.length < 16 && regex.test(senha);

    setValidInputs(nomeDoServicoValido && loginValido && senhaValida);
  }
  return (
    <StyledForm action="">
      <section>
        <label htmlFor="nome-do-servico">
          Nome do Serviço
          <br />
          <input
            id="nome-do-servico"
            name="nomeDoServico"
            type="text"
            value={ formInfo.nomeDoServico }
            onChange={ (event) => {
              handleChange(event);
              checkInputValues();
            } }
            required
          />
        </label>
      </section>
      <section>
        <label htmlFor="login">
          Login
          <br />
          <input
            id="login"
            name="login"
            type="text"
            value={ formInfo.login }
            onChange={ (event) => {
              handleChange(event);
              checkInputValues();
            } }
            required
          />
        </label>
      </section>
      <section>
        <label htmlFor="senha">
          Senha
          <br />
          <input
            id="senha"
            name="senha"
            type="password"
            value={ formInfo.senha }
            onChange={ (event) => {
              handleChange(event);
              checkInputValues();
            } }
            maxLength={ 16 }
            minLength={ 8 }
            required
          />
        </label>
      </section>
      <section>
        <label htmlFor="url">
          URL
          <br />
          <input
            id="url"
            name="url"
            type="text"
            value={ formInfo.url }
            onChange={ (event) => {
              handleChange(event);
              checkInputValues();
            } }
          />
        </label>
      </section>
      <div>
        <StyledButton disabled={ !validInputs }>Cadastrar</StyledButton>
        <StyledRedButton onClick={ handleHideForm }>Cancelar</StyledRedButton>
      </div>
    </StyledForm>
  );
}

export default Form;
