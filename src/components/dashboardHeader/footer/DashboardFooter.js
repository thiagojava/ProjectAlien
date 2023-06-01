import { Box, LinearProgress, Typography } from "@mui/material";
import { CardBox } from "../../../components/card/Index";
import { VerticalBarChart } from "../../charts/bar/barChart";
import {
  dashboardMiniCardBarLabel,
  dashboardMiniData,
  dashboardMiniData2,
} from "../../../utils/dashboardData";
import { MiniCard } from "../../card/MiniCard";

export const DashboardFooter = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
        marginBottom="10px"
      >
        <CardBox basis="35%" title='Fluxo de caixa' subtitle='Sua receita média nos últimos 12 períodos é de:123.456.789'>
          <VerticalBarChart
            labels={dashboardMiniCardBarLabel[0].labels}
            values={dashboardMiniCardBarLabel[1].values}
            color={dashboardMiniCardBarLabel[2].color}
          />
        </CardBox>
        <CardBox basis="15%" title='Patrimônio' subtitle='Volume total:3.397.994 | Perfomance 38%'>
          {dashboardMiniData.map((e, index) => (
            <MiniCard key={index} icon={e.icon} title={e.title} />
          ))}
        </CardBox>
        <CardBox basis="48%" title='Endividamento' subtitle='O valor total acumulado é de 123.456.789'>
        {dashboardMiniData2.map((e, index) => (
            <Box
              key={index}
              width="100%"
              display="flex"
              justifyContent="space-between"
            >
              <MiniCard key={index} icon={e.icon} title={e.title} />
              <Box>
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  {e.secundaryText}
                </Typography>
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
              </Box>
              <Box>
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  Representa hoje 12% do total de endividamento
                </Typography>
                <LinearProgress variant="determinate" value={89} />
              </Box>
            </Box>
          ))}
        </CardBox>
      </Box>
    </>
  );
};
