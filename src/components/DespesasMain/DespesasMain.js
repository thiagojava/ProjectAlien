import { Box } from "@mui/material";
import { CardBox } from "../card/Index";

export const DespesasMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Suas despesas' subtitle='O total projetado para o período é de 12% maior que o anterior'></CardBox>
        <CardBox basis="24%" title='Custo de capital' subtitle='Você já pagou 12% do valor total das suas operações de financiamento'></CardBox>
        <CardBox basis="48%" title='Lifestyle' subtitle='Suas despesas pessoais acumuladas no período é de:123.456.789'></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%" title='Habitação' subtitle='O valor é de 123% em relação ao período anterior'></CardBox>
        <CardBox basis="48%" title='Consumo' subtitle='O valor é de 123% em relação ao período'></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%" title='Transporte' subtitle='O valor é de 123% em relação ao período anterior'></CardBox>
        <CardBox basis="48%" title='Pessoal' subtitle='O valor é de 123% em relação ao período'></CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Diversos' subtitle='O valor é de 123% em relação ao período anterior'></CardBox>
        <CardBox basis="12%" title='Home' subtitle='Quanto vc gastou:123.456'></CardBox>
        <CardBox basis="12%" title='Estrutura' subtitle='Quanto você já pagou:123.456'></CardBox>
        <CardBox basis="12%" title='Contribuição' subtitle='Quanto você já pagou:123.456'></CardBox>
        <CardBox basis="12%" title='Saúde' subtitle='Quanto você já pagou:123.456'></CardBox>
        <CardBox basis="12%" title='Lazer' subtitle='Quanto você já pagou:123.456'></CardBox>
        <CardBox basis="12%" title='Performance' subtitle='Sua meta hoje:12%'></CardBox>
      </Box>
    </>
  );
};
