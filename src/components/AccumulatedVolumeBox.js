// ** Next Import
import Link from "next/link";

// ** MUI Imports
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import MuiDivider from "@mui/material/Divider";

const depositData = [
  {
    logoWidth: 28,
    logoHeight: 29,
    amount: "+$4,650",
    subtitle: "**** **** **** 1234",
    title: "Gumroad Account",
    titular: "Titular",
    nomeTitular: "Fulano de tal",
    validade: "Validade",
    validadeCartao: "12/30",
    limiteCredito: "Limite de crédito",
    totalAcumulado: "Total acumulado R$",
    totalAcumuladoCredito: "123.456.789",
    limiteCreditoCartao: "123.456.789",
    logo: "logos/gumroad.png",
    total: "12% do total",
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: "+$92,705",
    title: "Mastercard",
    titular: "Titular",
    nomeTitular: "Fulano de tal",
    validade: "Validade",
    validadeCartao: "12/30",
    limiteCredito: "Limite de crédito",
    totalAcumulado: "Total acumulado R$",
    totalAcumuladoCredito: "123.456.789",
    limiteCreditoCartao: "123.456.789",
    subtitle: "**** **** **** 1234",
    logo: "logos/mastercard-label.png",
    total: "12% do total",
  },
  {
    logoWidth: 20,
    logoHeight: 28,
    amount: "+$957",
    title: "Stripe Account",
    titular: "Titular",
    nomeTitular: "Fulano de tal",
    validade: "Validade",
    validadeCartao: "12/30",
    limiteCredito: "Limite de crédito",
    totalAcumulado: "Total acumulado R$",
    totalAcumuladoCredito: "123.456.789",
    limiteCreditoCartao: "123.456.789",
    subtitle: "**** **** **** 1234",
    logo: "logos/stripe.png",
    total: "12% do total",
  },
  {
    logoWidth: 34,
    logoHeight: 32,
    amount: "+$6,837",
    title: "American Bank",
    subtitle: "**** **** **** 1234",
    titular: "Titular",
    nomeTitular: "Fulano de tal",
    validade: "Validade",
    validadeCartao: "12/30",
    limiteCredito: "Limite de crédito",
    totalAcumulado: "Total acumulado R$",
    totalAcumuladoCredito: "123.456.789",
    limiteCreditoCartao: "123.456.789",
    logo: "logos/american-bank.png",
    total: "12% do total",
  },
  {
    logoWidth: 33,
    logoHeight: 22,
    amount: "+$446",
    title: "Bank Account",
    subtitle: "**** **** **** 1234",
    titular: "Titular",
    nomeTitular: "Fulano de tal",
    validade: "Validade",
    validadeCartao: "12/30",
    limiteCredito: "Limite de crédito",
    totalAcumulado: "Total acumulado R$",
    totalAcumuladoCredito: "123.456.789",
    limiteCreditoCartao: "123.456.789",
    logo: "logos/citi-bank.png",
    total: "12% do total",
  },
];

const CardDepositWithdraw = () => {
  return (
    <Card
      style={{ background: "#141414" }}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: ["column", "column", "row"],
      }}
    >
      <Box sx={{ width: "100%" }}>
        <CardHeader
          title="Volume acumulado"
          sx={{ "& .MuiCardHeader-action": { mt: -0.8 }, color: "#ffffff" }}
        />
        <CardContent>
          {depositData.map((item, index) => {
            return (
              <Box
                key={item.title}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: index !== depositData.length - 1 ? 7.3125 : 0,
                  background: "#000000",
                  color:"#ffffff",
                  borderRadius: "10px"
                }}
                padding="4px"
              >
                <Box
                  sx={{
                    minWidth: 38,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    width={item.logoWidth}
                    height={item.logoHeight}
                  />
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      mr: 2,
                      display: "flex",
                      flexDirection: "column",
                      flexBasis: "20%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 0.5, fontWeight: 600, fontSize: "0.875rem" }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="caption">{item.subtitle}</Typography>
                  </Box>
                  <Box
                    sx={{
                      mr: 2,
                      display: "flex",
                      flexDirection: "column",
                      flexBasis: "30%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 0.5, fontWeight: 600, fontSize: "0.875rem" }}
                    >
                      {item.totalAcumulado}
                    </Typography>
                    <Typography variant="caption">
                      {item.totalAcumuladoCredito}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      mr: 2,
                      display: "flex",
                      flexDirection: "column",
                      flexBasis: "30%",
                    }}
                  >
                    <Typography
                      sx={{ mb: 0.5, fontWeight: 600, fontSize: "0.875rem" }}
                    >
                      {item.total}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            );
          })}
        </CardContent>
      </Box>
    </Card>
  );
};

export default CardDepositWithdraw;
