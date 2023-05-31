import { Box, Grid } from "@mui/material";
import Navbar from "../components/Layout/Navbar";
import { HeadersCharts } from "../components/headerCharts/HeaderCharts";
import { headerListDRE } from "../utils/headersList";
import { TableList } from "../components/table/Table";
import { tablesDre } from "../utils/tables";

const dre = () => (
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
          <HeadersCharts data={headerListDRE}/>
          <TableList heads={tablesDre[0].heads} rows={tablesDre[1].rows}/>
        </Box>
      </Grid>
    </Grid>
  </>
);

export default dre