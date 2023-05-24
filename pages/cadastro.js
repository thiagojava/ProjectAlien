import { Grid } from "@mui/material";
import React from "react";
import FormLayoutsTabs from "../src/components/FormLayoutsTabs";
import Navbar from "../src/components/Layout/Navbar";

const Cadastro = () => (
  <>
    <Navbar />
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <FormLayoutsTabs />
      </Grid>
    </Grid>
  </>
);

export default Cadastro;
