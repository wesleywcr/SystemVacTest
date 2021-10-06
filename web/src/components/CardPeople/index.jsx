import { useState } from 'react';
import Image from 'next/image';
import Button from '../Button';
import Modal from '../Modal';
import Icon2 from '../../public/images/Icon2.png';
import {  ContainerCard,SectionHome  } from './styles';

export default function CardPeople() {
  const [isModal, setModal] = useState(false);
  const [name, setName] = useState("")

  function handleSubmit(event){
    event.preventDefault();
    console.log(name)
  
  }
  return (
    <ContainerCard>
<div>
<Image src={Icon2} alt=""/>
  <h3> Pesssoas Vacinadas: 100.000.00</h3>
  <ul>
            <label>Numero de Imunizados:</label>
            <li>1° Dose: 70000000 </li>
            <li>2° Dose: 25000000</li>
          </ul>
  </div>
    
    <form onSubmit={handleSubmit}> 
    <label htmlFor="">Busca</label> 
  <input
      type="number"
      placeholder="Digite o CPF da pessoa"
      onChange={(e)=>setName(e.target.value)}
   />
    </form>
 
   <SectionHome>
   <Button type="submit" props={() => setModal(true)}>Buscar</Button>
  
   <Modal
        isVisible={isModal}
        title="Busca Avançada"
        content={
        
        <div>
        
          <h2>Dados:</h2>
      
         <ul>
           <li>Nome: Wesley Rodrigues</li>
           <li>Estado: São Paulo </li>
           <li>Cidade: Guaratinguetá </li>
           <li>Data de aniversário: 2001-04-25</li>
           <li>Fabricante: Pfizer</li>
           <li>Lote: 35 </li>
           <li>Data da 1° dose: 2021-06-21 </li>
           </ul>
        
          </div>
      }
        footer={<Button props={() => setModal(false)}>Cancel</Button>}
        onClose={() => setModal(false)}
      />
 
  </SectionHome>
    </ContainerCard>
  );
};


