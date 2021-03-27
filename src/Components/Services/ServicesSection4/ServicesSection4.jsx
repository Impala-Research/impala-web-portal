import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import EyeImage from "../../../Assets/Eye-img.png";
import BgImage from "../../../../src/Assets/Background-Image.png";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "left",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },

  img: {
    paddingBottom: "18px",
    width: "10%",
    height: "auto",
  },
  typography: {
    paddingBottom: "16px",
  },
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${BgImage})`,
    height: " 80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: " cover",
  },
};

export default function ServicesSection4(props) {
  const classes = useStyles();
  return (
    <div style={styles.paperContainer} className={classes.root}>
      <Grid item>
        <Grid container>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
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
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
