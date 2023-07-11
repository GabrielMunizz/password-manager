type ButtonProps = {
  handleRenderForm: () => void
};
function Button(props: ButtonProps) {
  const { handleRenderForm } = props;
  return (
    <button onClick={ handleRenderForm }>Cadastrar nova senha</button>
  );
}

export default Button;
