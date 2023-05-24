import { Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { FluxoCaixaMain } from "../components/fluxoCaixaMain/fluxoCaixaMain";

const FluxoCaixa = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FluxoCaixaMain />
      </Grid>
    </Grid>
  </>
);

export default FluxoCaixa;