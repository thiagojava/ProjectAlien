import { Box, Card, Typography } from "@mui/material";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

export const CardIcon = (props) => {
  const {
    width,
    direction,
    content,
    basis,
    title,
    subtitle,
    icon,
    color,
    arrow,
    children,
  } = props;
  return (
    <>
      <Card
        sx={{
          width: width || "100%",
          padding: "10px",
        }}
        style={{
          display: "flex",
          flexDirection: direction || "column",
          background: "#141414",
          justifyContent: content || "space-around",
          flexBasis: basis || null,
        }}
      >
        {icon ? icon : null}
        <Box marginBottom="10px">
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            {title || "lorem ipsum"}
          </Typography>
          <Typography color={color || "#ffffff"} style={{ fontSize: "20px" }}>
            {subtitle || "123.456.789,00"}
            {arrow ? <ArrowDropUpIcon sx={{ color: "#1DBB48" }} /> : null}
          </Typography>
        </Box>
      </Card>
    </>
  );
};
