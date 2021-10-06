import { Bar,Line, Pie } from 'react-chartjs-2';
import { ContainerBar,ContainerLine } from './styles';

 const Chart = () => {
 return(
   <>
   <ContainerBar>
      <Bar
        data={{
          labels: ['Vacinados', 'Infectados', '2° dose ou dose única'],
          datasets: [
            {
              label: 'Pessoas',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [1000000,2000000,500000],
            },
          ],
        }}
        options={{
          scales: {
            y: {
              min: 100000,
              max: 3000000,
            }
          },
          
          plugins: {
            legend: {
              labels: {
                color:'#fff',
                font: {
                    size: 15,
                }
            }
            },
            title: {
              color:'#fff',
              display: true,
              size: 30,
              text: 'Vacinação',
              font: {
                size: 40,
            }
            }
          },
        }}
      />
      <div className="pie">
      <Pie
      data = {{
        labels: ['Pfizer', 'Coronavac', 'Janssei', 'Astrazeneca'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [35, 32, 13,20 ],
            backgroundColor:[ 'rgba(21, 93, 226, 0.5)', 'rgba(70, 235, 5, 0.5)','rgba(102, 13, 185, 0.5)','rgba(226, 186, 7, 0.5)']
          }
        ]
      }}
      />
      </div>
      </ContainerBar>
      <ContainerLine>
       <Line
        data={{
          labels: 'Grafico',
          datasets: [{
            data: [90, 80, 77, 52, 41, 50, 13],
            label: 'Mortos',
            borderColor: '#dd0707',
            fill: true,
          }, {
            data: [20, 25, 39, 48, 72, 80, 96],
            label: 'Vacinados',
            borderColor: 'blue',
            backgroundColor: 'rgba(15, 33, 201, 0.5)',
            fill: true,
          },
          ],
          plugins: {
            legend: {
              labels: {
                color:'#fff',
                font: {
                    size: 15,
                }
            }
            },
            title: {
              color:'#fff',
              display: true,
              size: 30,
              text: 'Line grafico',
              font: {
                size: 40,
            }
            }
          },
        }}
      />
      </ContainerLine>
    
     </>
 )
};

export default Chart;