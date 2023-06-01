import { Box, LinearProgress, Typography } from "@mui/material";
import { CardBox } from "../card/Index";
import { MiniCard } from "../card/MiniCard";
import HighlightIcon from "@mui/icons-material/Highlight";
import {
  dashboardMiniData3,
  dashboardMiniData4,
} from "../../utils/dashboardData";
import { LineChart } from "../charts/line/LineChart";
import { investMiniIcon } from "../../utils/investiment";
import { CardIcon } from "../card/cardIcon";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const InvestimentMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox
          basis="48%"
          title="Investida"
          subtitle="O valor é de 123% em relação ao período anterior"
        >
          <Box display="flex">
            <Box>
              <Box marginTop="150px">
                <MiniCard
                  icon={
                    <HighlightIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title={"Total acumulado (R$)"}
                />
              </Box>
              <Box display="flex" flexWrap="wrap" marginTop="30px" gap="15px">
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
              </Box>
            </Box>
            <Box>
              {dashboardMiniData3.map((e, index) => (
                <Box
                  key={index}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  gap="20px"
                  alignItems="center"
                  marginTop="15px"
                >
                  <MiniCard key={index} icon={e.icon} title={e.title} />
                  <Box width="100px" margin="5px">
                    <LinearProgress variant="determinate" value={89} />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </CardBox>
        <CardBox
          basis="48%"
          title="Start-up"
          subtitle="O valor é de 123% em relação ao período anterior"
        >
          <Box display="flex">
            <Box>
              <Box marginTop="150px">
                <MiniCard
                  icon={
                    <HighlightIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title={"Total acumulado (R$)"}
                />
              </Box>
              <Box display="flex" flexWrap="wrap" marginTop="30px" gap="15px">
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
                <MiniCard
                  basis="48%"
                  icon={null}
                  title={"Total acumulado (R$)"}
                  titleFont="10px"
                  subtitle="15px"
                />
              </Box>
            </Box>
            <Box>
              {dashboardMiniData3.map((e, index) => (
                <Box
                  key={index}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  gap="20px"
                  alignItems="center"
                  marginTop="15px"
                >
                  <MiniCard key={index} icon={e.icon} title={e.title} />
                  <Box width="100px" margin="5px">
                    <LinearProgress variant="determinate" value={89} />
                  </Box>
                </Box>
              ))}
            </Box>
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
          basis="48%"
          title="Custos investida"
          subtitle="O valor 123% em relação ao período anterior"
        >
          <Box display="flex">
            <Box>
              {dashboardMiniData4.map((e, index) => (
                <Box
                  key={index}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  gap="20px"
                  alignItems="center"
                  marginTop="15px"
                >
                  <MiniCard key={index} icon={e.icon} title={e.title} />
                </Box>
              ))}
            </Box>
            <Box width="90%">
              <LineChart
                labels={["", "", "", "", "", "", "", "", "", "", ""]}
                data={[
                  45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                  55856, 101538, 70356, 90321,
                ]}
                borderColor="#DE6449"
                backgroundColor="#911b00"
              />
            </Box>
          </Box>
        </CardBox>
        <CardBox
          basis="48%"
          title="Custos start-up"
          subtitle="O valor é de 123% em relação ao período anterior"
        >
          <Box display="flex">
            <Box>
              {dashboardMiniData4.map((e, index) => (
                <Box
                  key={index}
                  width="100%"
                  display="flex"
                  justifyContent="space-between"
                  gap="20px"
                  alignItems="center"
                  marginTop="15px"
                >
                  <MiniCard key={index} icon={e.icon} title={e.title} />
                </Box>
              ))}
            </Box>
            <Box width="90%">
              <LineChart
                labels={["", "", "", "", "", "", "", "", "", "", ""]}
                data={[
                  45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                  55856, 101538, 70356, 90321,
                ]}
                borderColor="#DE6449"
                backgroundColor="#911b00"
              />
            </Box>
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
          basis="48%"
          title="Performance carteira"
          subtitle="Último fechamento:12/05/23 | Cotação total (R$):123.456.789 | Variação:+123.456,78%"
        >
          <Box width="90%">
            <LineChart
              labels={[
                "JAN-2020",
                "AGO-2020",
                "JAN-2021",
                "AGO-2021",
                "JAN-2022",
                "AGO-2022",
                "JAN-2023",
                "AGO-2023",
              ]}
              data={[45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961]}
              borderColor="#5FB2E2"
              backgroundColor="#407899"
            />
          </Box>
        </CardBox>
        <Box
          display="flex"
          width="100%"
          flexWrap="wrap"
          flexBasis="40%"
          justifyContent="space-around"
          gap="15px"
        >
          {investMiniIcon.map((e, index) => (
            <Box key={index} display="flex" width="40%">
              <CardIcon
                icon={e.icon}
                title={e.title}
                color={e.color}
                arrow={true}
              />
            </Box>
          ))}
        </Box>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox
          basis="32%"
          title="Renda variável"
          subtitle="Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%"
        >
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-around"
            >
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
            </Box>
            <Box width="90%">
              <LineChart
                labels={["", "", "", "", "", "", "", "", "", "", ""]}
                data={[
                  45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                  55856, 101538, 70356, 90321,
                ]}
                borderColor="#A867F1"
                backgroundColor="#610BC4"
              />
            </Box>
          </Box>
        </CardBox>
        <CardBox
          basis="32%"
          title="Renda variável"
          subtitle="Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%"
        >
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-around"
            >
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
            </Box>
            <Box width="90%">
              <LineChart
                labels={["", "", "", "", "", "", "", "", "", "", ""]}
                data={[
                  45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                  55856, 101538, 70356, 90321,
                ]}
                borderColor="#A867F1"
                backgroundColor="#610BC4"
              />
            </Box>
          </Box>
        </CardBox>
        <CardBox
          basis="32%"
          title="Renda variável"
          subtitle="Último fechamento>12/05/23 | Cotação atual (R$):123.456.789,00 | +123.456,78%"
        >
          <Box display="flex" flexDirection="column">
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              justifyContent="space-around"
            >
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column">
                <Typography color="#ffffff" style={{ fontSize: "18px" }}>
                  123.456.789,00
                </Typography>
                <Typography style={{ fontSize: "10px", color: "#969696" }}>
                  Maior cotação em 52 semanas
                </Typography>
                <Typography style={{ fontSize: "12px", color: "#1DBB48" }}>
                  144,58%
                </Typography>
              </Box>
            </Box>
            <Box width="90%">
              <LineChart
                labels={["", "", "", "", "", "", "", "", "", "", ""]}
                data={[
                  45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961,
                  55856, 101538, 70356, 90321,
                ]}
                borderColor="#A867F1"
                backgroundColor="#610BC4"
              />
            </Box>
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
          basis="23%"
          title="Day trading"
          subtitle="Nubank (52%) | R$:123.456.789"
        >
          <Box width="90%">
            <LineChart
              labels={["", "", "", "", "", "", "", "", "", "", ""]}
              data={[
                45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961, 55856,
                101538, 70356, 90321,
              ]}
              borderColor="#DA820E"
              backgroundColor="#000000"
            />
          </Box>
        </CardBox>
        <CardBox
          basis="23%"
          title="Swing trading"
          subtitle="Nubank (52%) | R$:123.456.789"
        >
          <Box width="90%">
            <LineChart
              labels={["", "", "", "", "", "", "", "", "", "", ""]}
              data={[
                45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961, 55856,
                101538, 70356, 90321,
              ]}
              borderColor="#DA820E"
              backgroundColor="#000000"
            />
          </Box>
        </CardBox>
        <CardBox
          basis="23%"
          title="Estruturadas"
          subtitle="Nubank (52%) | R$:123.456.789"
        >
          <Box width="90%">
            <LineChart
              labels={["", "", "", "", "", "", "", "", "", "", ""]}
              data={[
                45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961, 55856,
                101538, 70356, 90321,
              ]}
              borderColor="#DA820E"
              backgroundColor="#000000"
            />
          </Box>
        </CardBox>
        <CardBox
          basis="23%"
          title="Exchange"
          subtitle="Nubank (52%) | R$:123.456.789"
        >
          <Box width="90%">
            <LineChart
              labels={["", "", "", "", "", "", "", "", "", "", ""]}
              data={[
                45908, 137658, 20502, 71663, 29392, 62593, 58124, 60961, 55856,
                101538, 70356, 90321,
              ]}
              borderColor="#DA820E"
              backgroundColor="#000000"
            />
          </Box>
        </CardBox>
      </Box>
    </>
  );
};
