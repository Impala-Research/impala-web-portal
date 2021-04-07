import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import "../Team.css";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0px 10px 0px ",
  },

  img: {
    paddingBottom: "18px",
    width: "55%",
    height: "auto",
  },
  typography: {
    paddingBottom: "16px",
  },
}));

export default function Member(props) {
  const classes = useStyles();
  return (
    <div>
      <Grid item>
        <img className={classes.img} src={props.png} alt="logo" />
        <Typography className={classes.typography} color="primary">
          {props.title}
        </Typography>
        <Typography className={classes.typography} color="secondary">
          {props.title1}
        </Typography>
        <Typography color="secondary">{props.text}</Typography>
      </Grid>
    </div>
  );
}
