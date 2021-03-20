import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Eye from "../Assets/Eye.png";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0px 10px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    paddingTop: "60px",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
    textAlign: "left",
  },
  img: {
    width: "10%",
    height: "auto",
    borderRadius: "10px",
  },
}));

export default function Benefits(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item >
          <Paper className={classes.paper}>
            <img className={classes.img} src={Eye} alt="logo" />
            <Typography color="primary">{props.title}</Typography>
            <Typography color="secondary">{props.text}</Typography>
          </Paper>
          
        </Grid>
      </Grid>
    </div>
  );
}
