import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Box, Typography } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

export const LineChart = (props) => {
  const { name, description, labels, data, borderColor, backgroundColor } =
    props;

  const datas = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: data,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <Box marginTop="20px" sx={{ background: "#141414", borderRadius: "10px" }}>
      <Box
        marginBottom="10px"
        padding="10px"
      >
        <Typography color="#ffffff" style={{ fontSize: "20px" }}>
          {name}
        </Typography>
        <Typography style={{ fontSize: "14px", color: "#969696" }}>
          {description}
        </Typography>
      </Box>
      <Box>
        <Line options={options} data={datas} />
      </Box>
    </Box>
  );
};
