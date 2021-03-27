import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import ServicesSection1 from "../ServicesSection1/ServicesSection1";
import ServicesSection2 from "../ServicesSection2/ServicesSection2";
import ServicesSection3 from "../ServicesSection3/ServicesSection3";
import ServicesSection4 from "../ServicesSection4/ServicesSection4";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0px 0px 0px 0px ",
    backgroundColor: "#F9F1E9",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
}));

export default function Services() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ServicesSection1
            title="Eye Tracking"
            text="Eye Tracking is a technology that allows you to understand what a person is really looking at while watching advertising, viewing design layouts, browsing a website, etc. It is the most objective method to measure consumers’ attention."
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ServicesSection2 title="How it Works" />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <ServicesSection3 />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={12}>
          <ServicesSection4
            title="Emotional recognition through face"
            text="Emotional Recognition through face Emotions define how we feel about certain things, facial expressions are the most obvious way to show those feelings. However, identifying human emotions in digitalization has always been a challenge – as a solution the implicit technique Emotional Recognition through face systems have been developed."
          />
        </Grid>
      </Grid>
    </div>
  );
}
