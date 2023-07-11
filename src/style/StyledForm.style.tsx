import { styled } from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  & section {    
    color: #fff;
    & input {
      font-size: 30px;
      border-radius: 5px;
    }
  }
`;
