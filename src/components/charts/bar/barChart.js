import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
};

export const VerticalBarChart = (props) => {
    const {labels, values, color} = props

    const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: values,
            backgroundColor: color,
          }
        ],
      };

    return (
        <Bar options={options} data={data} />
    )
}