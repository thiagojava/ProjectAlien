import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { DashboardHeader } from "../components/dashboardHeader/dashboardHeader";
import { DashboardMain } from "../components/dashboardHeader/main/dashboardMain";
import { DashboardFooter } from "../components/dashboardHeader/footer/DashboardFooter";

const dashboard = () => (
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
          <DashboardHeader />
          <DashboardMain />
          <DashboardFooter />
        </Box>
      </Grid>
    </Grid>
  </>
);

export default dashboard;
