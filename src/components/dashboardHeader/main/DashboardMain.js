import { Box, Typography } from "@mui/material";
import { CardBox } from "../../../components/card/Index";
import { SimpleCircleChart } from "../../charts/circle/SimpleCircleChart";
import { MiniCard } from "../../card/MiniCard";
import { dashboardMiniCardMain, dashboardMiniIcon } from "../../../utils/dashboardData";
import { LineChart } from "../../charts/line/LineChart";
import { CardIcon } from "../../card/cardIcon";

export const DashboardMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
        gap="10px"
      >
        <CardBox basis="40%" title='Últimos 7 dias' subtitle='Seu ticket médio foi de R$123.456.789'>
          <Box
            height="100%"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            {dashboardMiniCardMain.map((e, index) => (
              <MiniCard key={index} icon={e.icon} title={e.title} basis="24%" />
            ))}
          </Box>
          <Box>
            <LineChart
              labels={["SEG", "TER", "QUA", "QUI", "SEX", "SAB", "DOM"]}
              data={[75689, 30120, 95698, 159530, 64998, 31237, 77.188]}
              borderColor="#969696"
              backgroundColor='#000000'
            />
          </Box>
        </CardBox>
        <CardBox basis="25%" title='Próximas transações' subtitle='Seu saldo final será de:123.456.789'>
          <Box display="flex" alignItems="center" justifyContent="center" marginTop="10px" flexDirection="column">
            <Box flexBasis="48%" display="flex"  alignItems="center">
              <Box>
                <Typography color="#f4442e" style={{ fontSize: "24px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  De despesas projetadas
                </Typography>
              </Box>
            </Box>
            <Box width="200px" flexBasis="48%">
              <Box display="flex" alignItems="center" flexDirection="column">
                <SimpleCircleChart
                  name="Meta projetada"
                  colors={{ back: "#f4442e" }}
                />
                <Typography style={{ fontSize: "14px", color: "#969696" }}>
                  Meta projetada{" "}
                  <Typography style={{ fontSize: "14px", color: "#f4442e" }}>
                    89%
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
        <Box display="flex" flexWrap="wrap" basis="22%" justifyContent="space-around" gap="5px">
          {dashboardMiniIcon.map((e,index) => (
            <CardIcon key={index} icon={e.icon} title={e.title} color={e.color} basis="40%"></CardIcon>
          ))}
        </Box>
      </Box>
    </>
  );
};
