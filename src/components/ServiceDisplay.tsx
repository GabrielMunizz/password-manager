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
      {submitedFormInfo.map(({ nomeDoServico, login, senha, url }) => (
        <div key={ nomeDoServico }>
          <a href={ url }>{nomeDoServico}</a>
          <p>{login}</p>
          <p>{senha}</p>
        </div>
      ))}
    </StyledDisplay>
  );
}

export default ServiceDisplay;
