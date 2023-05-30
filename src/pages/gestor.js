import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { GestorMain } from "../components/gestor/gestorMain";
import { HeadersCharts } from "../components/headerCharts/HeaderCharts";
import { headerListGestor } from "../utils/headersList";

const Gestor = () => (
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
          <HeadersCharts data={headerListGestor}/>
          <GestorMain />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default Gestor
