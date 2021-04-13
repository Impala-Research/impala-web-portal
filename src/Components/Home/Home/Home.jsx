import React from "react";
import { Grid, Button, Paper, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Section2 from "../Section2/Section2";
import Section3 from "../Section3/Section3";
import Section4 from "../Section4/Section4";
import Section5 from "../Section5/Section5";
import Section6 from "../Section6/Section6";
import "./Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "260px 0px 260px 0px ",
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

export default function Home() {
  const classes = useStyles();

  return (
    <div className="Home">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>
              <Typography variant="h4" color="primary">
                It's time to understand your customer's behavior as never before
              </Typography>
            </Paper>
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
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" color="secondary">
                Impala is the first neuromarketing DIY platform that enables you
                to gain a deep understanding of human behavior. It provides you
                with out of the box data to take your marketing strategy to the
                next level.
              </Typography>
            </Paper>
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
            <Paper className={classes.paper}>
              <Link to="/Features">
                <Button> Find out how</Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
    </div>
  );
}
