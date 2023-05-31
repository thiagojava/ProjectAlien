import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SimpleCircleChart = (props) => {
  const { name, back } = props;

  const datas = {
    labels: [],
    datasets: [
      {
        label: name,
        data: ["89","11"],
        backgroundColor: [props.colors.back, "#969696"],
        borderColor: back || '#141414',
        borderWidth: 10,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: true,
      },
    },
    elements: {
      center: {
        text: "89%",
        color: "#ffffff",
        fontStyle: "Arial",
        sidePadding: 40,
        minFontSize: 20,
        lineHeight: 25,
      },
    },
  };
  

  return <Doughnut data={datas} options={options}/>;
};
