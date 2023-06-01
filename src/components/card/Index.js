import { Box, Card, Typography } from "@mui/material";

export const CardBox = (props) => {
  const { width, direction, content, basis, title, subtitle, icon, height, children } = props;
  return (
    <>
      <Card
        sx={{
          width: width || "100%",
          height: height || null, 
          padding:"10px"
        }}
        style={{
          display: "flex",
          flexDirection: direction || "column",
          background: "#141414",
          justifyContent: content || "flex-start",
          flexBasis: basis || null
        }}
      >
        <Box marginBottom="10px">
          <Typography color="#ffffff" style={{ fontSize: "20px" }}>
            {title || "Lorem Ipsum"}
          </Typography>
          <Typography style={{ fontSize: "14px", color: "#969696" }}>
            {subtitle || "123.456.789,00"}
          </Typography>
        </Box>
        { children }
      </Card>
    </>
  );
};
