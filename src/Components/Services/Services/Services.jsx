import React from "react";
import { Grid, Paper, makeStyles } from "@material-ui/core";
import ServicesSection1 from "../ServicesSection1/ServicesSection1";

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
    </div>
  );
}
