import { Box, Card, Typography } from "@mui/material";
import { SimpleCircleChart } from "../charts/circle/SimpleCircleChart";
import { colorsChart } from "../../utils/colors";

export const HeadersCharts = (props) => {
  const { data } = props;
  return (
    <Card
      sx={{
        width: "90%",
      }}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#141414",
        justifyContent: "space-around",
        marginTop: "15px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "30px",
          background: "#343134"
        }}
      >
        {data[0].top.map((e, index) => {
          const colors = colorsChart[Math.floor(Math.random() * 5)];
          return (
            <Box
              key={index}
              width="150px"
              flexBasis="10%"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <SimpleCircleChart name={e} colors={colors} back={"#343134"}/>
              <Typography color="#ffffff" style={{ fontSize: "16px" }}>
                {e}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box
        width="100%"
        display="flex"
        justifyContent="space-around"
        padding="15px"
      >
        {data[0].bottom.map((e, index) => {
          const colors = colorsChart[Math.floor(Math.random() * 5)];
          return (
            <Box
              flexBasis="10%"
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Box key={index} width="80px">
                <SimpleCircleChart colors={colors}/>
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
    </Card>
  );
};
