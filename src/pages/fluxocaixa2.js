import { Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { FluxoCaixaMain2 } from "../components/fluxoCaixaMain2/fluxoCaixaMain2";
import { BoxCharts } from "../components/fluxoCaixaMain2/boxCharts/BoxCharts";
import { BoxHistory } from "../components/fluxoCaixaMain2/boxHistoric/boxHistoric";
import { TableList } from "../components/table/Table";
import { tablesFluxoDeCaixa } from "../utils/tables";


const FluxoCaixa = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FluxoCaixaMain2 />
        <BoxCharts />
        <BoxHistory />
        <TableList heads={tablesFluxoDeCaixa[0].heads} rows={tablesFluxoDeCaixa[1].rows} />
      </Grid>
    </Grid>
  </>
);

export default FluxoCaixa;