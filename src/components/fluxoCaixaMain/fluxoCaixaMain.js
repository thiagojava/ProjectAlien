import { Box, Card, ImageListItem, Typography } from "@mui/material";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import Image from "mui-image";
import { fluxoCaixaCard } from "../../utils/fluxoCaixaCards";

export const FluxoCaixaMain = () => {
  return (
    <>
      <Card
        sx={{
          width: { xs: "100%", sm: "90%" },
          height: "900px",
          mx: "auto",
          mt: 2,
        }}
        style={{
          display: "flex",
          flexDirection: "column",
          background: "#000000",
        }}
      >
        {fluxoCaixaCard.map((e, index) => (
          <Card
            key={index}
            sx={{ width: "28%", height: "150px" }}
            style={{
              background: "#141414",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Box>
              <Typography color="#ffffff" style={{ fontSize: "20px" }}>
                {e.name}
              </Typography>
              <Typography style={{ fontSize: "14px", color: "#969696" }}>
                {e.description}
              </Typography>
              <Box display="flex" flexDirection="row">
                <DocumentScannerIcon sx={{ color: "#969696" }} />
                <Typography style={{ fontSize: "14px", color: "#4BB543" }}>
                  {e.value}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Image src={e.img} alt="text" />
            </Box>
          </Card>
        ))}
      </Card>
    </>
  );
};
