import HomePage from './HomePage'


export default function Home({dados}) {
console.log(dados);
{dados.map((company)=>{
    console.log(company.id)
  })}
  return (
   <HomePage/>
    

  )
}
export async function getStaticProps() {
  
  const res = await fetch(`http://localhost:3333/peoples`)
  const retorno = await res.json();
  
  return {
    props:{
      dados: retorno
    }
  }
 
}
