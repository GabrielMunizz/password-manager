export type FormInfoType = {
  nomeDoServico: string,
  login: string,
  senha: string,
  url: string,
};

export type FormProps = {
  handleHideForm: () => void,
  handleChange: (event:TargetType) => void,
  handleSubmit: (event:FormSubmitEventType) => void,
  formInfo:FormInfoType,
};

export type TargetType = React
  .ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>;

export type FormSubmitEventType = React.FormEvent<HTMLFormElement>;
