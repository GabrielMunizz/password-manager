import { useState } from 'react';
import { FormInfoType } from '../types/types';
import { StyledDisplay } from '../style/StyledDisplay.style';
import { StyledRedButton } from '../style/StyledButton.style';

type ServiceDisplayProps = {
  submitedFormInfo: FormInfoType[]
};

function ServiceDisplay(props: ServiceDisplayProps) {
  const { submitedFormInfo } = props;
  const [services, setServices] = useState<FormInfoType[]>(submitedFormInfo);

  function handleEraseService() {
    setServices((prevServices) => [...prevServices]);
  }

  return (
    <StyledDisplay>
      <h1>Senhas cadastradas:</h1>
      {submitedFormInfo.map(({ nomeDoServico, login, senha, url }) => (
        <section className={ nomeDoServico } key={ nomeDoServico }>
          <a href={ url } target="_blank" rel="noreferrer">{nomeDoServico}</a>
          <p>{login}</p>
          <p>{senha}</p>
          <StyledRedButton
            data-testid="remove-btn"
            onClick={ () => handleEraseService() }
          >
            Apagar serviço

          </StyledRedButton>
        </section>
      ))}

    </StyledDisplay>
  );
}

export default ServiceDisplay;
