import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { PerfilDashboard } from "../components/perfil/PerfilDashboard";
import { PerfilMain } from "../components/perfil/perfilMain/PerfilMain";

const Perfil = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Box width="100%" display="flex" flexDirection="column" alignItems="center">
          <PerfilDashboard />
          <PerfilMain />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Perfil;
