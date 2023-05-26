import { Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { FluxoCaixaMain } from "../components/fluxoCaixaMain/fluxoCaixaMain";
import { FluxoCaixaSelectCard } from "../components/fluxoCaixaMain/fluxoCaixaSelectCard/FluxoCaixaSelectCard";

const FluxoCaixa = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FluxoCaixaMain />
        <FluxoCaixaSelectCard />
      </Grid>
    </Grid>
  </>
);

export default FluxoCaixa;