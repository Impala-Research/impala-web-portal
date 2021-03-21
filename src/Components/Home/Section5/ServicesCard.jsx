import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Eye from "./Eye.png";
import "../Home.css";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F1E9",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",

  },
  img: {
    width: "25%",
    height: "auto",
    paddingBottom: "25px",
    paddingTop: "30px",
  },
  typography: {
    paddingBottom: "35px",
  },
  button: {
    marginBottom: "35px",
  },
}));

export default function ServicesCard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing="2">
        <Grid item>
          <Paper className={classes.paper}>
            <img className={classes.img} src={Eye} alt="logo" />
            <Typography className={classes.typography} color="primary">
              {props.title}
            </Typography>
            <Typography className={classes.typography} color="secondary">
              {props.text}
            </Typography>
          </Paper>
          <Button
            className={classes.button}
            variant="contained"
            color="seocnadry"
          >
            How it works
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
