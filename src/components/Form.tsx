import { useState } from 'react';
import { FormInfoType, TargetType } from '../types/types';

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
    <form action="">
      <div>
        <label htmlFor="nome-do-servico">
          Nome do Serviço
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
      </div>
      <div>
        <label htmlFor="login">
          Login
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
      </div>
      <div>
        <label htmlFor="senha">
          Senha
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
      </div>
      <div>
        <label htmlFor="url">
          URL
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
      </div>
      <div>
        <button disabled={ !validInputs }>Cadastrar</button>
        <button onClick={ handleHideForm }>Cancelar</button>
      </div>
    </form>
  );
}

export default Form;
