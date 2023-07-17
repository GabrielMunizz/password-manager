import { useState } from 'react';
import { FormInfoType } from '../types/types';
import { StyledDisplay } from '../style/StyledDisplay.style';
import { StyledRedButton } from '../style/StyledButton.style';

type ServiceDisplayProps = {
  submitedFormInfo: FormInfoType[],
  handleEraseService: (login: string) => void,
};

function ServiceDisplay(props: ServiceDisplayProps) {
  const { submitedFormInfo, handleEraseService } = props;
  const [isChecked, setIsChecked] = useState(false);
  function handleShowPassword({ target }: React.ChangeEvent<HTMLInputElement>) {
    setIsChecked(target.checked);
  }

  return (
    <StyledDisplay>
      <h1>Senhas cadastradas:</h1>
      {submitedFormInfo.map(({ nomeDoServico, login, senha, url }) => (
        <section className={ nomeDoServico } key={ nomeDoServico }>
          <a href={ url } target="_blank" rel="noreferrer">{nomeDoServico}</a>
          <p>{login}</p>
          <p>{isChecked ? '********' : senha}</p>
          <StyledRedButton
            data-testid="remove-btn"
            onClick={ () => handleEraseService(login) }
          >
            Apagar serviço

          </StyledRedButton>
        </section>
      ))}
      <div className="checkContainer">
        <label htmlFor="showPassword">
          Esconder senhas
          <input
            type="checkbox"
            checked={ isChecked }
            name="showPassword"
            id="showPassword"
            onChange={ handleShowPassword }
          />
        </label>

      </div>
    </StyledDisplay>
  );
}

export default ServiceDisplay;
