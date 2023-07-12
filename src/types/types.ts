export type FormInfoType = {
  nomeDoServico: string,
  login: string,
  senha: string,
  url: string,
};

export type FormProps = {
  handleHideForm: () => void,
  handleChange: (event:TargetType) => void,
  formInfo:FormInfoType,
};

export type TargetType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;
