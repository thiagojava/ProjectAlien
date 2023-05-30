import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { InvestimentMain } from "../components/investimentosMain/InvestimentosMain";
import { HeadersCharts } from "../components/headerCharts/HeaderCharts";
import { headerListInvestimento } from "../utils/headersList";

const investimentos = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box
          width="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <HeadersCharts data={headerListInvestimento}/>
          <InvestimentMain />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default investimentos
