import { Box, Card } from "@mui/material";
import { LineChart } from "../../charts/line/LineChart";
import {
  fluxoCaixa2Data,
  fluxoCaixa2Data2,
} from "../../../utils/fluxoCaixaCards2";
import { CircleChart } from "../../charts/circle/circleChart";

export const BoxCharts = () => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "90%" },
          mx: "auto",
          mt: 2,
        }}
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#000000",
          justifyContent: "space-around",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "30%" }}
          justifyContent="space-between"
        >
          <LineChart
            name={fluxoCaixa2Data[0].name}
            description={fluxoCaixa2Data[0].description}
            labels={fluxoCaixa2Data[0].labels}
            data={fluxoCaixa2Data[0].data}
            borderColor={fluxoCaixa2Data[0].borderColor}
            backgroundColor={fluxoCaixa2Data[0].backgroundColor}
          />
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          sx={{ width: "20%" }}
        >
          {fluxoCaixa2Data.map((e, index) => {
            if (index !== 0) {
              return (
                <LineChart
                  key={index}
                  name={e.name}
                  description={e.description}
                  labels={e.labels}
                  data={e.data}
                  borderColor={e.borderColor}
                  backgroundColor={e.backgroundColor}
                />
              );
            }
          })}
        </Box>
        <Box display="flex" flexDirection="column" sx={{ width: "40%" }}>
          {fluxoCaixa2Data2.map((e, index) => (
            <CircleChart
              key={index}
              name={e.name}
              description={e.description}
              icon={e.icon}
              value={e.value}
              tags={e.tags}
              labels={e.labels}
              data={e.data}
              borderColor={e.borderColor}
              backgroundColor={e.backgroundColor}
            />
          ))}
        </Box>
      </Card>
    </>
  );
};
