import { Avatar, Box, Typography } from "@mui/material";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ContactsIcon from "@mui/icons-material/Contacts";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      label: "# of Votes",
      data: [89, 11],
      backgroundColor: ["rgba(255, 99, 132, 0.2)", "rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
      borderWidth: 0.5,
    },
  ],
};

export const PerfilDashboard = () => {
  return (
    <Box
      width="90%"
      sx={{ background: "#141414" }}
      marginTop="10px"
      display="flex"
      borderRadius="10px"
    >
      <Box width="25%">
        <Box height="120px" padding="10px">
          <Typography color="#ffffff" style={{ fontSize: "18px" }}>
            Bem vindo extra terrestre
          </Typography>
          <Typography style={{ fontSize: "10px", color: "#969696" }}>
            Faça aqui seus sonhos começarem a se aproximar de sua realidade
            atual...
          </Typography>
        </Box>
        <Box padding="10px" >
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            Vamos lá....!?
          </Typography>
          <Typography color="#ffffff" style={{ fontSize: "20px" }}>
            Fulano de tal..
          </Typography>
        </Box>
        <Box
          height="80px"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar>H</Avatar>
        </Box>
      </Box>
      <Box
        width="75%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box height="120px" display="flex" justifyContent="space-around">
          <Box
            height="100%"
            width="100%"
            display="flex"
            flexDirection="row"
          >
           <Box
            height="100%"
            flexBasis="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Doughnut data={data} />
            <Typography
              color="#ffffff"
              style={{ fontSize: "12px", color: "#969696" }}
            >
              Meta de faturamento 89%
            </Typography>
          </Box>
          <Box
            height="100%"
            flexBasis="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Doughnut data={data} />
            <Typography
              color="#ffffff"
              style={{ fontSize: "12px", color: "#969696" }}
            >
              Meta de faturamento 89%
            </Typography>
          </Box>
          <Box
            height="100%"
            flexBasis="33%"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Doughnut data={data} />
            <Typography
              color="#ffffff"
              style={{ fontSize: "12px", color: "#969696" }}
            >
              Meta de faturamento 89%
            </Typography>
          </Box>
          </Box>
        </Box>
        <Box height="80px">
          <Box height="100%" display="flex" justifyContent="flex-start" >
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="10px">
              <ContactsIcon
                fontSize="large"
                sx={{
                  color: "#969696",
                  borderRadius: "5px",
                }}
              />
              <Box display="flex" flexDirection="column">
                <Typography style={{ fontSize: "12px", color: "#969696" }}>
                  Nos conhecemos em:
                </Typography>
                <Typography style={{ fontSize: "18px", color: "#ffffff" }}>
                  10 Mai 2023
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="10px">
              <ContactsIcon
                fontSize="large"
                sx={{
                  color: "#969696",
                  borderRadius: "5px",
                }}
              />
              <Box display="flex" flexDirection="column">
                <Typography style={{ fontSize: "12px", color: "#969696" }}>
                  Nos conhecemos em:
                </Typography>
                <Typography style={{ fontSize: "18px", color: "#ffffff" }}>
                  10 Mai 2023
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="10px">
              <ContactsIcon
                fontSize="large"
                sx={{
                  color: "#969696",
                  borderRadius: "5px",
                }}
              />
              <Box display="flex" flexDirection="column">
                <Typography style={{ fontSize: "12px", color: "#969696" }}>
                  Nos conhecemos em:
                </Typography>
                <Typography style={{ fontSize: "18px", color: "#ffffff" }}>
                  10 Mai 2023
                </Typography>
              </Box>
            </Box>
            <Box display="flex" justifyContent="center" alignItems="center" marginRight="10px">
              <ContactsIcon
                fontSize="large"
                sx={{
                  color: "#969696",
                  borderRadius: "5px",
                }}
              />
              <Box display="flex" flexDirection="column">
                <Typography style={{ fontSize: "12px", color: "#969696" }}>
                  Nos conhecemos em:
                </Typography>
                <Typography style={{ fontSize: "18px", color: "#ffffff" }}>
                  10 Mai 2023
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
