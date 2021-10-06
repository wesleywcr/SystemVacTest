import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import Modal from '../Modal';
import Butantan from '../../public/images/butantan.png';
import Fiocruz from '../../public/images/fiocruz.jpg';
import Johnson  from '../../public/images/johnson-and-johnson.png';
import Pfizer from '../../public/images/pfizer.png';

import {  ContainerCard,SectionHome,ScrollDiv  } from './styles';

export default function Card(company) {
const [data,setData] = useState([])


  useEffect(() => {
    (async () => {
      const response = await fetch('http://localhost:3333/company');
      const data  = await response.json();
      setData(data);
    })();
  }, []);

{data.map((company)=>{
  console.log(company.vaccines)
})}

  const [isModal, setModal] = useState(false);
  const [vaccine, setVaccine] = useState("Astrazeneca")

  function handleChange(event){
    setVaccine(event.target.value)
  
  }

 
  return (
  
    <ContainerCard>
      
<div>
  {vaccine =='Astrazeneca'&&(
    <Image src={Fiocruz} alt="logo fiocruz"/>
    )}
  {vaccine =='Pfizer'&&(
    <Image src={Pfizer} alt="logo pfizer"/>
    )}
  {vaccine == 'CoronaVac'&&(
    <Image src={Butantan} alt="logo butantan"/>
    )}
  {vaccine == 'Janssen'&&(
    <Image src={Johnson} alt="logo johnson e johnson"/>
    )}
  
  <h3>Total de Doses: 100000000</h3>

  </div>
    <form>
    <select  value={vaccine} onChange={handleChange} >
     <option value="Astrazeneca" >AstraZeneca</option>
      <option value="CoronaVac">Coronavac</option>
      <option value="Janssen">Janssen</option>
      <option value="Pfizer">Pfizer</option>
    </select>
    </form>
 
   <SectionHome>
   <Button type="submit" props={() => setModal(true)}>Mais Detalhes</Button>
 
   <Modal
        isVisible={isModal}
        title="Gerenciamento de vacinas"
        content={
    
        <ScrollDiv >

          <ul>
            <li> <strong>Número de Lotes:</strong>  35</li>
            <li></li>
          </ul>
          <h2>Distribuição:</h2>
      
         <ul>
         
           <li><strong>São Paulo:</strong>  10000000 doses</li>
           <li><strong>Rio de Janeiro:</strong>  20000 doses</li>
           <li><strong>Minas Gerais:</strong>  400000 doses</li>
           <li><strong>Rio Grande do Sul:</strong> 100000doses</li>
           <li><strong>Bahia: 200000 </strong> doses</li>
           <li><strong>Mato Grosso do Sul:</strong>  9000000 doses</li>
           <li><strong>Paraná: </strong>2000000 doses</li>
           <li><strong>Goias: </strong> 2000000 doses</li>
           <li><strong>Amazonas:</strong> 3000000 doses</li>
           
           </ul>
           
          </ScrollDiv>
      }
      footer={<Button props={() => setModal(false)}>Cancel</Button>}
      onClose={() => setModal(false)}
      />

 
  </SectionHome>
    </ContainerCard>
   
  );
};

