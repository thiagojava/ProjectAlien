import { Box, Card } from "@mui/material";
import { fluxoCaixaCard3 } from "../../../utils/fluxoCaixaCards2";
import { ImageCard } from "../../imageCard/ImageCard";

export const BoxHistory = () => {
  return (
    <Box>
      <Card
        sx={{
          width: { xs: "100%", sm: "90%" },
          mx: "auto",
          mt: 2,
        }}
        style={{
            background: "#000000",
          display: "flex",
          flexDirection: "row",
          justifyContent:"space-between"
        }}
      >
        {fluxoCaixaCard3.map((e, index) => (
          <ImageCard
            key={index}
            index={index}
            name={e.name}
            description={e.description}
            icon={e.icon}
            value={e.value}
            width={e.width}
          />
        ))}
      </Card>
    </Box>
  );
};
