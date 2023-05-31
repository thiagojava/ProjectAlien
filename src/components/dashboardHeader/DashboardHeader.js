import { Box, Typography } from "@mui/material";
import { CardBox } from "../card/Index";
import { SimpleCircleChart } from "../charts/circle/SimpleCircleChart";
import { dashboardMiniCard } from "../../utils/dashboardData";
import { MiniCard } from "../card/MiniCard";

export const DashboardHeader = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="33%">
          <Box display="flex">
            <Box flexBasis="48%" display="flex" alignItems="center">
              <Box>
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  R$
                </Typography>
                <Typography color="#ffffff" style={{ fontSize: "24px" }}>
                  123.456.789,00
                </Typography>
              </Box>
            </Box>
            <Box width="200px" flexBasis="48%">
              <Box display="flex" alignItems="center" flexDirection="column">
                <SimpleCircleChart
                  name="Vida útil:"
                  colors={{ back: "#f4442e" }}
                />
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  Vida útil:{" "}
                  <Typography style={{ fontSize: "14px", color: "#f4442e" }}>
                    234 dias
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
        <CardBox basis="63%">
          <Box display="flex" flexWrap="wrap" justifyContent="space-between">
            {dashboardMiniCard.map((e,index) => (
              <MiniCard key={index} icon={e.icon} title={e.title} basis="24%"/>
            ))}
          </Box>
        </CardBox>
      </Box>
    </>
  );
};
