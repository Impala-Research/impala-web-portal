import React from "react";
import { Grid, Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: { paddingTop: "40px", paddingBottom: "100px" },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  button: {
    paddingTop: "45px",
  },
}));

export default function ServicesSection3() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="primary">
              Eye Tracking on Impala
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <Typography color="secondary">
              On IMPALA, the eye tracking technology is fully integrated with
              other neuromarketing technologies. It allows you to cross-analyze
              consumers’ explicit responses with their non-conscious reactions
              and get the most reliable insights. The eye tracking technology is
              fully automated. Eye tracking studies are mainly using a computer
              webcam to detect data. Please note that the accuracy of the
              webcam-based eye tracking results depends on the webcam
              resolution.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container className={classes.button}>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Link to="/Plans-Pricing">
              <Button>Our Prices</Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <Link to="/Services">
              <Button>How Impala Works</Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
