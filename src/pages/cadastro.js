import { Grid } from "@mui/material";
import React from "react";
import FormLayoutsTabs from "../components/formLayoutsTabs/FormLayoutsTabs";
import Navbar from "../components/Layout/Navbar";

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
