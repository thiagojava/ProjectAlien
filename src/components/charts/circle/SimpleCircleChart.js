import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SimpleCircleChart = (props) => {
  const { name } = props;

  const datas = {
    labels: [],
    datasets: [
      {
        label: name,
        data: ["89","11"],
        backgroundColor: [props.colors.back, "#969696"],
        borderColor: [props.colors.border, "#717171"],
        borderColor: '#141414',
        borderWidth: 10,
      },
    ],
  };

  const options = {
    cutoutPercentage: 70, 
    plugins: {
      legend: {
        display: true,
        position: 'chartArea', 
        labels: {
          boxWidth: 20,
        },
      },
    },
  };
  

  return <Doughnut data={datas} options={options}/>;
};
