import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { DespesasMain } from "../components/DespesasMain/DespesasMain";

const Despesas = () => (
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
          <DespesasMain />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Despesas;
