import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import EyeImage from "../../Assets/Eye-img.png";
import "../../../src/Components/Home/Home/Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F9F1E9",
  },
  paper: {
    paddingTop: "20px",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  img: {
    paddingBottom: "18px",
    width: "12%",
    height: "auto",
  },
  typography: {
    paddingBottom: "16px",
  },
}));

export default function Benefits(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Paper className={classes.paper}>
            <img className={classes.img} src={EyeImage} alt="logo" />
            <Typography
              variant="h5"
              className={classes.typography}
              color="primary"
            >
              {props.title}
            </Typography>
            <Typography className={classes.typography} color="primary">
              {props.title1}
            </Typography>
            <Typography variant="subtitle1" color="secondary">
              {props.text}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
