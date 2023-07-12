import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing:border-box;
  & body {
    background-color: #1a1a1a;
    background-image: linear-gradient(to bottom, #1a1a1a, #000000);
    background-repeat: no-repeat;
    background-size: 100vw 100vh ;    
  }
}
`;
