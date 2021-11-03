import Card from '../../components/Card';
import CardPeople from '../../components/CardPeople';
import Chart from '../../components/Chart';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { Container, Content, Title } from './styles';

export default function HomePage() {
 
  return (
    <>
      <Header/>
   <Title>Covid19</Title>
    <Container>
    <Content>
       
       <Card/>
       <CardPeople/>

       </Content>
    </Container>
     <Chart/>
     <Footer/>
    </>
  );
};




