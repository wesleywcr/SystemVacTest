import styled from 'styled-components';

export const ContainerCard  = styled.div`
  background: #0179fc;
  width: 18.5rem;
  height: 23rem;
  padding: 0;
  box-shadow: 0 2px 4px 0 #000;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  transition: 0.3s ease all;

  img {
   margin: 0;
   width: 200px;
   height: 100px;
   border-radius: 0 1rem;
   object-fit: cover;
   display: block;
}

  h3,label,ul,li{
  text-align: center;
  line-height: 1rem;
  margin: 0.2rem;
}
li{
  list-style-type: none;
  padding: 2px;
}
form>label, input{
 margin-top: 1.3rem;
}
h3{
  margin: 0;
  padding: 12px 15px 15px;
  line-height: 32px;
  font-weight: 500;
  font-size: 20px;
}
form{
  display: flex;
  justify-content: center;
}
button{
  display: flex;
  justify-content: center;
  align-items: center;
}
`;
export const SectionHome = styled.section`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1.3rem;
`; 
