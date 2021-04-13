import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    paddingTop: "80px",
    paddingBottom: "100px",
  },
  typography: {
    paddingBottom: "15px",
  },
  typography1: {
    paddingBottom: "15px",
  },
  button: {
    marginTop: "10px",
    marginLeft: "15px",
  },
}));

export default function ServicesSection5(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item>
        <Typography variant="h4" className={classes.typography} color="primary">
          {props.title}
        </Typography>
        <Typography
          className={classes.typography1}
          variant="subtitle1"
          color="secondary"
        >
          {props.text}
        </Typography>
        <Typography variant="h4" className={classes.typography} color="primary">
          {props.title1}
        </Typography>
        <Typography
          className={classes.typography1}
          variant="subtitle1"
          color="secondary"
        >
          {props.text1}
        </Typography>
        <Link to="/Services">
          <Button className={classes.button}>Our Prices</Button>
        </Link>
        <Link to="/Plans-Pricing">
          <Button className={classes.button}>How Impala Works</Button>
        </Link>
      </Grid>
    </div>
  );
}
