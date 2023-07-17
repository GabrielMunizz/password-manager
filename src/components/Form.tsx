import { useState } from 'react';
import { FormProps, FormSubmitEventType } from '../types/types';
import { StyledButton, StyledRedButton } from '../style/StyledButton.style';
import { StyledForm } from '../style/StyledForm.style';

// Regex para checagem e validação das senhas referente ao input de senha no form.
const regex = /\W|_/;
const regexLetrasENumeros = /[a-zA-Z][0-9]/;

// Cria o componente Form:
function Form(props: FormProps) {
  // Transferência das funções e estados criados no .App para o formulário via props.
  const { formInfo, handleHideForm, handleChange, handleSubmit } = props;
  const { nomeDoServico, login, senha } = formInfo;

  // useState para uso da função checkInputValues. Serve para checar se o que foi escrito no input não é vazio e também é válido.
  const [validInputs, setValidInputs] = useState(false);

  // className referente ao estado da senha: válida ou inválida
  const classSenhaValida = 'valid-password-check';
  const classSenhaInvalida = 'invalid-password-check';

  // Checagem dos inputs, de acordo com os requisitos e testes do projeto:
  function checkInputValues() {
    const nomeDoServicoValido = nomeDoServico.trim() !== '';
    const loginValido = login.trim() !== '';
    const senhaValida = senha.length > 8 && senha.length < 16 && regex.test(senha);

    setValidInputs(nomeDoServicoValido && loginValido && senhaValida);
  }

  // Cria função que mostra ou esconde senha digitada no input
  const [hidePass, setHidePass] = useState(true);
  function showPass() {
    if (hidePass) {
      setHidePass(false);
    } else {
      setHidePass(true);
    }
  }

  // Form:
  return (
    <StyledForm
      action=""
      onSubmit={ (event: FormSubmitEventType) => {
        handleSubmit(event);
        handleHideForm();
      } }
    >
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
            type={ hidePass ? 'password' : 'text' }
            value={ formInfo.senha }
            onChange={ (event) => {
              handleChange(event);
              checkInputValues();
            } }
            maxLength={ 16 }
            minLength={ 8 }
            required
          />
          <br />
          <button
            data-testid="show-hide-form-password"
            onClick={ () => showPass() }
          >
            Mostrar senha

          </button>
          <p className={ senha.length > 8 ? classSenhaValida : classSenhaInvalida }>
            Possuir 8 ou mais caracteres
          </p>
          <p
            className={ (senha.length < 16 && senha.length > 0) ? classSenhaValida
              : classSenhaInvalida }
          >
            Possuir até 16 caracteres
          </p>
          <p
            className={ regexLetrasENumeros.test(senha) ? classSenhaValida
              : classSenhaInvalida }
          >
            Possuir letras e números
          </p>
          <p className={ regex.test(senha) ? classSenhaValida : classSenhaInvalida }>
            Possuir algum caractere especial
          </p>
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
        <StyledButton disabled={ !validInputs } type="submit">Cadastrar</StyledButton>
        <StyledRedButton onClick={ handleHideForm }>Cancelar</StyledRedButton>
      </div>
    </StyledForm>
  );
}

export default Form;
