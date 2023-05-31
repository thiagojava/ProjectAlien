import { Box, Typography } from "@mui/material";
import { CardBox } from "../card/Index";
import { SimpleCircleChart } from "../charts/circle/SimpleCircleChart";
import { headerDespesas } from "../../utils/headersList";
import { colorsChart } from "../../utils/colors";
import { MiniCard } from "../card/MiniCard";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export const DespesasMain = () => {
  return (
    <>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Suas despesas' subtitle='O total projetado para o período é de 12% maior que o anterior'>
          <Box marginTop="70px">
            <Typography color="#969696" style={{ fontSize: "12px" }}>
              R$
            </Typography>
            <Typography style={{ fontSize: "24px", color: "#ffffff" }}>
              123.456.789
            </Typography>
          </Box>
        </CardBox>
        <CardBox basis="24%" title='Custo de capital' subtitle='Você já pagou 12% do valor total das suas operações de financiamento'>
          <Box marginTop="70px">
            <Typography color="#969696" style={{ fontSize: "12px" }}>
              R$
            </Typography>
            <Typography style={{ fontSize: "24px", color: "#ffffff" }}>
              123.456.789
            </Typography>
          </Box>
        </CardBox>
        <CardBox basis="48%" title='Lifestyle' subtitle='Suas despesas pessoais acumuladas no período é de:123.456.789'>
          <Box display="flex" justifyContent="space-around">
            {headerDespesas.map((e, index) => {
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
                    <SimpleCircleChart colors={colors} />
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
        </CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%" title='Habitação' subtitle='O valor é de 123% em relação ao período anterior'>
          <Box display="flex" gap="150px">
            <Box>
              <Box marginTop="50px">
                <MiniCard
                  icon={
                    <HomeWorkIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title="Total acumulado (R$)"
                />
                <Box marginTop="30px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de entradas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#008000" }}>
                    123.456.789
                  </Typography>
                </Box>
                <Box marginTop="20px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de saídas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#ff0000" }}>
                    123.456.789
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box width="200px" display="flex" alignItems="center">
              <SimpleCircleChart colors={{ back: "#9800f3" }} />
              <Box>
                <Typography color="#969696" style={{ fontSize: "12px" }}>
                  Média
                </Typography>
                <Typography style={{ fontSize: "24px", color: "#9800f3" }}>
                  123.456.789
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
        <CardBox basis="48%" title='Consumo' subtitle='O valor é de 123% em relação ao período'>
          <Box display="flex" gap="150px">
            <Box>
              <Box marginTop="50px">
                <MiniCard
                  icon={
                    <HomeWorkIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title="Total acumulado (R$)"
                />
                <Box marginTop="30px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de entradas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#008000" }}>
                    123.456.789
                  </Typography>
                </Box>
                <Box marginTop="20px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de saídas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#ff0000" }}>
                    123.456.789
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box width="200px" display="flex" alignItems="center">
              <SimpleCircleChart colors={{ back: "#e03616" }} />
              <Box>
                <Typography color="#969696" style={{ fontSize: "12px" }}>
                  Média
                </Typography>
                <Typography style={{ fontSize: "24px", color: "#e03616" }}>
                  123.456.789
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        justifyContent="space-between"
      >
        <CardBox basis="48%" title='Transporte' subtitle='O valor é de 123% em relação ao período anterior'>
          <Box display="flex" gap="150px">
            <Box>
              <Box marginTop="50px">
                <MiniCard
                  icon={
                    <HomeWorkIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title="Total acumulado (R$)"
                />
                <Box marginTop="30px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de entradas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#008000" }}>
                    123.456.789
                  </Typography>
                </Box>
                <Box marginTop="20px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de saídas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#ff0000" }}>
                    123.456.789
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box width="200px" display="flex" alignItems="center">
              <SimpleCircleChart colors={{ back: "#E97406" }} />
              <Box>
                <Typography color="#969696" style={{ fontSize: "12px" }}>
                  Média
                </Typography>
                <Typography style={{ fontSize: "24px", color: "#E97406" }}>
                  123.456.789
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
        <CardBox basis="48%" title='Pessoal' subtitle='O valor é de 123% em relação ao período'>
          <Box display="flex" gap="150px">
            <Box>
              <Box marginTop="50px">
                <MiniCard
                  icon={
                    <HomeWorkIcon fontSize="large" sx={{ color: "#969696" }} />
                  }
                  title="Total acumulado (R$)"
                />
                <Box marginTop="30px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de entradas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#008000" }}>
                    123.456.789
                  </Typography>
                </Box>
                <Box marginTop="20px">
                  <Typography color="#969696" style={{ fontSize: "12px" }}>
                    Total de saídas
                  </Typography>
                  <Typography style={{ fontSize: "18px", color: "#ff0000" }}>
                    123.456.789
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box width="200px" display="flex" alignItems="center">
              <SimpleCircleChart colors={{ back: "#41d3bd" }} />
              <Box>
                <Typography color="#969696" style={{ fontSize: "12px" }}>
                  Média
                </Typography>
                <Typography style={{ fontSize: "24px", color: "#41d3bd" }}>
                  123.456.789
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardBox>
      </Box>
      <Box
        display="flex"
        width="90%"
        marginTop="10px"
        marginBottom="10px"
        justifyContent="space-between"
      >
        <CardBox basis="24%" title='Diversos' subtitle='O valor é de 123% em relação ao período anterior'>
          <Box display="flex" gap="50px">
            <Box>
              <Box marginTop="50px">
                <MiniCard
                  icon={
                    <HomeWorkIcon fontSize="large" sx={{ color: "#F0E032" }} />
                  }
                  title="Total acumulado (R$)"
                />
              </Box>
            </Box>
            <Box width="150px" display="flex" alignItems="center">
              <SimpleCircleChart colors={{ back: "#F0E032" }} />
            </Box>
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Home' subtitle='Quanto vc gastou:123.456'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#E97406" }} />
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Estrutura' subtitle='Quanto você já pagou:123.456'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#791e94" }} />
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Contribuição' subtitle='Quanto você já pagou:123.456'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#008000" }} />
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Saúde' subtitle='Quanto você já pagou:123.456'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#9800f3" }} />
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Lazer' subtitle='Quanto você já pagou:123.456'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#e03616" }} />
          </Box>
        </CardBox>
        <CardBox basis="12%" title='Performance' subtitle='Sua meta hoje:12%'>
          <Box width="150px" display="flex" justifyContent="center">
            <SimpleCircleChart colors={{ back: "#791e94" }} />
          </Box>
        </CardBox>
      </Box>
    </>
  );
};
