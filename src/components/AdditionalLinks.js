import React from "react";
import DeveloperLinks from "./DeveloperLinks";
import ResourceLinks from "./ResourceLinks";
import { Container, Grid, Typography } from "@mui/material";

export default function AdditionalLinks() {

  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} mt={8}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Open Source
          <DeveloperLinks/>
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" component="h2">
            Our Resources
          </Typography>
          <ResourceLinks/>
        </Grid>
      </Grid>
    </Container>
  );
}

