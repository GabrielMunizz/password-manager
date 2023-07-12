import { useState } from 'react';
import { FormProps } from '../types/types';
import { StyledButton, StyledRedButton } from '../style/StyledButton.style';
import { StyledForm } from '../style/StyledForm.style';

// Regex para checagem e validação das senhas referente ao input de senha no form.
const regex = /\W|_/;
const regexLetrasENumeros = /[a-zA-Z][0-9]/;

function Form(props: FormProps) {
  // Transferência das funções e estados criados no .App para o formulário via props.
  const { handleHideForm, formInfo, handleChange } = props;
  const { nomeDoServico, login, senha } = formInfo;
  // useState para uso da função checkInputValues. Serve para checar se o que foi escrito no input não é vazio e também é válido.
  const [validInputs, setValidInputs] = useState(false);
  // Checagem dos inputs, de acordo com os requisitos e testes do projeto:
  function checkInputValues() {
    const nomeDoServicoValido = nomeDoServico.trim() !== '';
    const loginValido = login.trim() !== '';
    const senhaValida = senha.length > 8 && senha.length < 16 && regex.test(senha);

    setValidInputs(nomeDoServicoValido && loginValido && senhaValida);
  }
  // className referente ao estado da senha: válida ou inválida
  const senhaValida = 'valid-password-check';
  const senhaInvalida = 'invalid-password-check';

  // Form:
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
          <p className={ senha.length > 8 ? senhaValida : senhaInvalida }>
            Possuir 8 ou mais caracteres
          </p>
          <p className={ senha.length < 16 ? senhaValida : senhaInvalida }>
            Possuir até 16 caracteres
          </p>
          <p className={ regexLetrasENumeros.test(senha) ? senhaValida : senhaInvalida }>
            Possuir letras e números
          </p>
          <p className={ regex.test(senha) ? senhaValida : senhaInvalida }>
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
        <StyledButton disabled={ !validInputs }>Cadastrar</StyledButton>
        <StyledRedButton onClick={ handleHideForm }>Cancelar</StyledRedButton>
      </div>
    </StyledForm>
  );
}

export default Form;
