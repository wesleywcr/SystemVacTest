import styled from 'styled-components';

export const ButtonContainer = styled.button `
  color: #fff;
  background: #1f2a48;
  border: 1px solid #1f2a48;
  box-shadow: #000;
  border-radius: 0.75rem;
  font-weight: 4  00;
  font-size:1rem;
  font-family: 'Ubuntu';
  padding: 0.20rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
:hover{
  color: #1f2a48;
  background: #fff;
  transition: 0.2s ease-in-out ;
  transform: scale(1.1);
}
`;
