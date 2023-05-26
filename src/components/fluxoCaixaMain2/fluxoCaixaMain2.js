import { Box, Card, Typography } from "@mui/material";
import { ImageCard } from "../imageCard/ImageCard";
import { fluxoCaixaCard2, fluxoCaixaIcon2 } from "../../utils/fluxoCaixaCards2";

export const FluxoCaixaMain2 = () => {
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
        {fluxoCaixaCard2.map((e, index) => (
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
        <Card
          sx={{ width: "60%", height: "200px" }}
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.8911939775910365) 0%, rgba(20,20,20,1) 50%)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            width: "40%",
          }}
        >
          <Box
            marginBottom="10px"
            padding="10px"
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Typography color="#ffffff" style={{ fontSize: "20px" }}>
              Resumo transações
            </Typography>
            <Typography style={{ fontSize: "14px", color: "#969696" }}>
              Você inseriu um total de: 123
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            {fluxoCaixaIcon2.map((e, index) => (
              <Box
                key={index}
                display="flex"
                flexDirection="row"
                marginRight="10px"
                alignItems="center"
              >
                {e.icon}
                <Box
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                >
                  <Typography fontSize={5} color="#969696">
                    {e.name}
                  </Typography>
                  <Typography fontSize={4} color="#ffffff">
                    {e.value}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Card>
      </Card>
    </>
  );
};
