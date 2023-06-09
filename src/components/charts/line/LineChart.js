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
  },
};

export const LineChart = (props) => {
  const { name, description, labels, data, borderColor, backgroundColor, height } =
    props;

  const datas = {
    labels,
    datasets: [
      {
        label: "",
        data: data,
        borderColor: borderColor,
        backgroundColor: backgroundColor,
      },
    ],
  };

  return (
    <Box marginTop="20px" height={height?height:null} sx={{ background: "#141414", borderRadius: "10px" }}>
      <Box marginBottom="10px" padding="10px">
        {name ? (
          <Typography color="#ffffff" style={{ fontSize: "20px" }}>
            {name}
          </Typography>
        ) : null}
        {description ? (
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            {description}
          </Typography>
        ) : null}
      </Box>
      <Box>
        <Line options={options} data={datas} />
      </Box>
    </Box>
  );
};
