import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F1E9",
    height: "90vh",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  button: {
    borderRadius: "18px",
    backgroundColor: "#5C42BA",
    color: "white",
  },
  p: {
    color: "#777777",
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="primary">
              It's time to understand your customer's behavior as never before
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Typography className={classes.p}>
              <p>
                Impala is the first neuromarketing DIY platform that enables you
                to gain a deep understanding of human behavior. It provides you
                with out of the box data to take your marketing strategy to the
                next level.
              </p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper className={classes.paper}>
            <Link className={classes.button} to="/Features">
              <Button variant="contained" className={classes.button}>
                Find out how
              </Button>
            </Link>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
