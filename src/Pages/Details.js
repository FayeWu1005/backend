import React from "react";
import NewsCard from "../components/NewsCard";
import Header from "../components/Header";
import Back from "../components/Back";

import { useParams } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { Footer } from "../components/Footer";

const Details = () => {
  const params = useParams();
  return (
    <React.Fragment>
      <Header />
      <br />

      <Container maxWidth="sm">
        <Grid container spacing={1} columns={12}>
          <Grid item xs={6}>
            <Back />
          </Grid>
          <Grid item xs={6}>
            <h3>News for {params.query}</h3>
          </Grid>
        </Grid>

        <br />
        <NewsCard query={params.query} />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Details;
