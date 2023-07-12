import { styled } from 'styled-components';

export const StyledDisplay = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  width: 400px;
  min-height: 200px;
  & h1 {
    text-align: center;
    border-bottom: 1px solid black;
  }
  & section {
    margin: 10px;
    border: 1px solid black;    
    padding: 5px;
  }
 
`;
