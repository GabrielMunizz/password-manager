import { StyledButton } from '../style/StyledButton.style';

type ButtonProps = {
  handleRenderForm: () => void
};
function Button(props: ButtonProps) {
  const { handleRenderForm } = props;
  return (
    <StyledButton onClick={ handleRenderForm }>Cadastrar nova senha</StyledButton>
  );
}

export default Button;
