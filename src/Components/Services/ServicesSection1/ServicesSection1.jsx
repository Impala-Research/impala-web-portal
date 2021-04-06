import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import EyeImage from "../../../Assets/Eye-img.png";
import EyeAndGirlImage from "../../../Assets/GirlAndEyeImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0px 0px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    paddingTop: "30px",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  img: {
    paddingBottom: "18px",
    width: "8%",
    height: "auto",
  },
  typography: {
    paddingBottom: "16px",
  },
  img1: {
    paddingTop: "40px",
    width: "100%",
    height: "auto",
  },
}));

export default function ServicesSection1(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <Paper className={classes.paper}>
            <img className={classes.img} src={EyeImage} alt="logo" />
            <Typography
              variant="h4"
              className={classes.typography}
              color="primary"
            >
              {props.title}
            </Typography>
            <Typography variant="body1" color="secondary">
              {props.text}
            </Typography>
          </Paper>
          <img className={classes.img1} src={EyeAndGirlImage} alt="logo" />
        </Grid>
      </Grid>
    </div>
  );
}
