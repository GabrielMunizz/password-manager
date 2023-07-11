type FormProps = {
  handleHideForm: () => void;
};
function Form(props: FormProps) {
  const { handleHideForm } = props;
  return (
    <form action="">
      <div>
        <label htmlFor="nome-do-servico">
          Nome do Serviço
          <input id="nome-do-servico" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="login">
          Login
          <input id="login" type="text" />
        </label>
      </div>
      <div>
        <label htmlFor="senha">
          Senha
          <input id="senha" type="password" />
        </label>
      </div>
      <div>
        <label htmlFor="url">
          URL
          <input id="url" type="text" />
        </label>
      </div>
      <div>
        <button>Cadastrar</button>
        <button onClick={ handleHideForm }>Cancelar</button>
      </div>
    </form>
  );
}

export default Form;
