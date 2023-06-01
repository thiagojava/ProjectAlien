import { Box, LinearProgress, Typography } from "@mui/material";
import { CardBox } from "../card/Index";
import {
  gestorBarLabel,
  gestorData,
  gestorStates,
  gestorUsuarios,
} from "../../utils/gestorData";
import { ImageCard } from "../imageCard/ImageCard";
import { SimpleCircleChart } from "../charts/circle/SimpleCircleChart";
import { headerDespesas } from "../../utils/headersList";
import { colorsChart } from "../../utils/colors";
import { LineChart } from "../charts/line/LineChart";
import { MiniCard } from "../card/MiniCard";
import { dashboardMiniData, dashboardMiniData2 } from "../../utils/dashboardData";
import { VerticalBarChart } from "../charts/bar/barChart";

export const GestorMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        {gestorData.map((e, index) => (
          <ImageCard
            key={index}
            index={index}
            name={e.name}
            description={e.description}
            icon={e.icon}
            value={e.value}
            img={e.img}
            width={e.width}
          />
        ))}
        <CardBox
          basis="48%"
          title="Usuários"
          subtitle="Acima de 50 anos (12%):321.397.994"
        >
          <Box display="flex" justifyContent="space-around">
            {gestorUsuarios.map((e, index) => {
              const colors = colorsChart[Math.floor(Math.random() * 5)];
              return (
                <Box
                  flexBasis="10%"
                  key={index}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box width="80px">
                    <SimpleCircleChart colors={colors} />
                  </Box>
                  <Box
                    marginBottom="10px"
                    padding="10px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography color="#969696" style={{ fontSize: "12px" }}>
                      {e}
                    </Typography>
                    <Typography style={{ fontSize: "9px", color: "#ffffff" }}>
                      123.456.789
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox
          basis="45%"
          title="Mapa de usuário"
          subtitle="País:Brasil | Total:123.456.789"
        >
          <Box
            flexBasis="100%"
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="space-around"
          >
            {gestorStates.map((e, index) => {
              return (
                <Box
                  flexBasis="19%"
                  key={index}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                >
                  <Box width="80px">
                    <SimpleCircleChart colors={{ back: e.color }} />
                  </Box>
                  <Box
                    marginBottom="10px"
                    padding="10px"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    <Typography color="#969696" style={{ fontSize: "12px" }}>
                      {e.name}
                    </Typography>
                    <Typography style={{ fontSize: "9px", color: "#ffffff" }}>
                      123.456.789
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </CardBox>
        <Box
          display="flex"
          width="100%"
          flexDirection="column"
          flexBasis="53%"
          justifyContent="space-between"
          gap="10px"
        >
          <CardBox
            basis="48%"
            title="Cadastros última semana"
            subtitle="O total de novos usuários foi de:123.456"
          >
            <Box width="100%" display="flex" justifyContent="center" alignItems="center">
              <Box width="50%">
                <LineChart
                  labels={["", "", "", "", "", "", "", "", "", "", ""]}
                  data={[
                    45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                    55856, 101538, 70356, 90321,
                  ]}
                  borderColor="#969696"
                  backgroundColor="#000000"
                />
              </Box>
            </Box>
          </CardBox>
          <CardBox
            basis="48%"
            title="Próximas transações"
            subtitle="O saldo consolidado (R$):123.456.789.987.654"
            height="400px"
          >
            <Box>
              <Box>
                <Typography color="#969696" style={{ fontSize: "12px" }}>
                  R$ 123.456.789
                </Typography>
                <Typography style={{ fontSize: "9px", color: "#ffffff" }}>
                  de transações projetadas:
                </Typography>
              </Box>
              <Box width="30%">
              <SimpleCircleChart colors={{ back: "#DA820E" }} />
              </Box>
            </Box>
          </CardBox>
          <CardBox
            basis="100%"
            title="Volume transacional"
            subtitle="Acima de 50 anos (12%):321.793.994"
          >
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
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox
          basis="24%"
          title="Faturamento"
          subtitle="Volume total:3.397.994 | Performance:38%"
        >
          {dashboardMiniData.map((e, index) => (
            <MiniCard key={index} icon={e.icon} title={e.title} />
          ))}
        </CardBox>
        <CardBox
          basis="24%"
          title="Investida"
          subtitle="Volume total:3.397.994 | Performance:38%"
        >
          {dashboardMiniData.map((e, index) => (
            <MiniCard key={index} icon={e.icon} title={e.title} />
          ))}
        </CardBox>
        <CardBox
          basis="24%"
          title="Start-up"
          subtitle="Volume total:3.397.994 | Performance:38%"
        >
          {dashboardMiniData.map((e, index) => (
            <MiniCard key={index} icon={e.icon} title={e.title} />
          ))}
        </CardBox>
        <CardBox
          basis="24%"
          title="Fluxo de caixa"
          subtitle="Volume nos últimos 360 dias (R$):123.456.789.987"
        >
          <VerticalBarChart
            labels={gestorBarLabel[0].labels}
            values={gestorBarLabel[1].values}
            color={gestorBarLabel[2].color}
          />
        </CardBox>
      </Box>
    </>
  );
};
