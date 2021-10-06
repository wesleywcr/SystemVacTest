import { ButtonContainer } from './styles'


export default function Button({props, children}) {
  return (
    <ButtonContainer  onClick={props}>
     {children}
    </ButtonContainer >
  );
};


