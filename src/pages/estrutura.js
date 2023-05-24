import { Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { EstructureMain } from "../components/estructureMain/EstructureMain";

const Estrutura = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <EstructureMain />
      </Grid>
    </Grid>
  </>
);

export default Estrutura;