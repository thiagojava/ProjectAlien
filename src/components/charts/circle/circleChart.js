import { Box, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const CircleChart = (props) => {
  const {
    name,
    description,
    icon,
    value,
    tags,
    labels,
    data
  } = props;

  const datas = {
    labels: labels,
    datasets: [
      {
        label: "Média (R$):",
        data: data,
        backgroundColor: ["#B75CD0", "#969696"],
        borderColor: ["#5A2469", "#717171"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Box display="flex" marginTop="20px" sx={{ background: "#141414", borderRadius: "10px" }}>
        <Box marginBottom="10px" padding="10px" flexBasis="60%">
          <Box>
            <Typography color="#ffffff" style={{ fontSize: "20px" }}>
              {name}
            </Typography>
            <Typography style={{ fontSize: "14px", color: "#969696" }}>
              {description}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            marginTop="15px"
            alignItems="center"
          >
            {icon}
            <Typography
              style={{ fontSize: "18px", color: "#ffffff", marginLeft: "10px" }}
            >
              {value.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            marginTop="10px"
          >
            {tags.map((e, index) => (
              <>
                <Box
                  key={index}
                  flexBasis="50%"
                  marginTop="20px"
                  display="flex"
                >
                  <Box>
                    <Typography style={{ fontSize: "14px", color: "#969696" }}>
                      {e}
                    </Typography>
                    <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                      {value}
                    </Typography>
                  </Box>
                  <ArrowDropUpIcon
                    sx={{
                      color: index === 0 || index === 1 ? "#4BB543" : "#FF0000",
                    }}
                  />
                </Box>
              </>
            ))}
          </Box>
        </Box>
        <Box width="200px" marginTop="60px">
          <Doughnut data={datas} />
        </Box>
      </Box>
    </>
  );
};
