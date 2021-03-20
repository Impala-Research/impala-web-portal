import React from "react";
import Grid from "@material-ui/core/Grid";
import "../Home.css";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "280px 0px 280px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  border: {
    paddingTop: "90px",
    paddingBottom: "90px",
    borderTop: "solid 1px",
    borderColor: "#D8D8D8",
  },
}));

export default function Benefits() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>sm=12</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
