import { FormInfoType } from '../types/types';
import { StyledDisplay } from '../style/StyledDisplay.style';

type ServiceDisplayProps = {
  submitedFormInfo: FormInfoType[]
};

function ServiceDisplay(props: ServiceDisplayProps) {
  const { submitedFormInfo } = props;
  // const { nomeDoServico, login, senha, url } = submitedFormInfo;
  return (
    <StyledDisplay>
      <h1>Senhas cadastradas:</h1>
      {submitedFormInfo.map(({ nomeDoServico, login, senha, url }) => (
        <section className={ nomeDoServico } key={ nomeDoServico }>
          <a href={ url } target="_blank" rel="noreferrer">{nomeDoServico}</a>
          <p>{login}</p>
          <p>{senha}</p>
        </section>
      ))}

    </StyledDisplay>
  );
}

export default ServiceDisplay;
