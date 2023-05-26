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
        <Box display="flex" flexDirection="column" sx={{ width: "40%" }} justifyContent="space-between">
          {fluxoCaixa2Data.map((e, index) => (
            <LineChart
              key={index}
              name={e.name}
              description={e.description}
              labels={e.labels}
              data={e.data}
              borderColor={e.borderColor}
              backgroundColor={e.backgroundColor}
            />
          ))}
        </Box>
        <Box display="flex" flexDirection="column" sx={{ width: "40%" }} >
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
