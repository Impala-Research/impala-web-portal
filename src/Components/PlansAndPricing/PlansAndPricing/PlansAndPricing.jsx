import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import BasicTable from "../Table";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "160px 0px 160px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
}));

export default function PlansAndPricing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="primary">
              Pricing
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography color="secondary">
              <p>
                We offer packages based on customer segment. Each package
                includes a certain number of licenses as well a maximum number
                of respondents. In case you have any questions or none of our
                packages fit your current needs, contact us – we are happy to
                find a solution together!
              </p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <BasicTable />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
