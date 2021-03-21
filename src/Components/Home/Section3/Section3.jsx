import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ImageGirl from "../../../Assets/ImageGirl.png";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../Home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0px 100px 0px ",
    backgroundColor: "#ffffff",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  },
  paper: {
    padding: theme.spacing(2),
    backgroundColor: "#ffffff",
    boxShadow: "none",
  },
  img: {
    width: "100%",
    height: "auto",
    borderRadius: "10px",
  },
  BtnColor: {
    backgroundColor: "#F4E3D4",
  },
  textAlign: {
    textAlign: "left",
  },
  border: {
    paddingTop: "100px",
    paddingBottom: "50px",
    borderTop: "solid 1px",
    borderColor: "#D8D8D8",
  },
}));

export default function Section3() {
  const classes = useStyles();

  return (
    <div className="Section3">
      <div className={classes.root}>
        <Grid className={classes.textAlign} container>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
          <Grid className={classes.border} item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <Typography variant="h4" color="primary">
                <p className={classes.fontSize}>How Impala Works ?</p>
              </Typography>
              <Typography color="secondary">
                <p className={classes.fontSize}>
                  Rather than relying on a neuromarketing expert, you can now
                  analyze high quality in-depth know-how in your own speed and
                  whenever you want. IMPALA platform provides you with a unique
                  combination of new implicit techniques which easily define
                  drivers for behavior.
                </p>
                <p>
                  {" "}
                  All this data is then immediately analyzed with advanced
                  statistics and presented to you in user-friendly and
                  easy-to-ready formats
                </p>
              </Typography>
              <Link to="/Services">
                <Button href="/Services" className={classes.BtnColor}>
                  Techinques
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid className={classes.border} item xs={12} sm={5}>
            <Paper className={classes.paper}>
              <img className={classes.img} src={ImageGirl} alt="logo" />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
