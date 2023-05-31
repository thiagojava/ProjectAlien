import { Box } from "@mui/material";
import { CardBox } from "../card/Index";

export const GestorMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Masculino' subtitle='Proporção 98%'></CardBox>
        <CardBox basis="24%" title='Feminino' subtitle='Proporção 12%'></CardBox>
        <CardBox basis="48%" title='Usuários' subtitle='Acima de 50 anos (12%):321.397.994'></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Mapa de usuário' subtitle='País:Brasil | Total:123.456.789'></CardBox>
        <CardBox basis="24%"></CardBox>
        <Box
          display="flex"
          width="100%"
          flexWrap="wrap"
          flexBasis="48%"
          justifyContent="space-between"
          gap="10px"
        >
          <CardBox basis="48%" title='Cadastros última semana' subtitle='O total de novos usuários foi de:123.456'></CardBox>
          <CardBox basis="48%" title='Próximas transações' subtitle='O saldo consolidado (R$):123.456.789.987.654'></CardBox>
          <CardBox basis="100%" title='Volume transacional' subtitle='Acima de 50 anos (12%):321.793.994'></CardBox>
        </Box>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Faturamento' subtitle='Volume total:3.397.994 | Performance:38%'></CardBox>
        <CardBox basis="24%" title='Investida' subtitle='Volume total:3.397.994 | Performance:38%'></CardBox>
        <CardBox basis="24%" title='Start-up' subtitle='Volume total:3.397.994 | Performance:38%'></CardBox>
        <CardBox basis="24%" title='Fluxo de caixa' subtitle='Volume nos últimos 360 dias (R$):123.456.789.987'></CardBox>
      </Box>
    </>
  );
};
