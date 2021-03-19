import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Impala from "../../Assets/Impala.png";
import { Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    height: "150vh",
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
  textAlign: {
    textAlign: "left",
  },
  BtnColor:{
    backgroundColor:"#F4E3D4"
  }
}));

const Section2 = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item  xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography variant="h4" color="primary">
              Why Impala?
            </Typography>
          </Paper>
        </Grid>
        <Grid item  xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item  xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <Typography color="secondary">
              <p>
                Digital media and digital marketing are moving faster than ever.
                It’s not only impossible to keep track of all trends it’s even
                more challenging to understand what trends are matching your
                target customer.
              </p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            <img className={classes.img} src={Impala} alt="logo" />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid className={classes.textAlign} container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Typography color="primary">
              <p className={classes.fontSize}>
                The most reliable approach, nowadays, is to understand your
                target audience. Better than you ever have before. And better
                than they could ever understand themselves.
              </p>
              <Button href="/Services" className={classes.BtnColor}>
                Services
              </Button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Typography color="secondary">
              <p>
                That’s where neuromarketing comes in. Being one of the top
                trends itself (for good reasons!) neuromarketing focuses on the
                in-depth human behavior by using the latest implicit measurement
                techniques.
              </p>{" "}
              <p>
                {" "}
                Those highly advanced technologies enable you to define the
                drivers of behavior – beyond the conscious behavior of your
                customers. So far, and because of its complexity, neuromarketing
                analysis was mainly managed by experts that would provide you
                with selected results.
              </p>{" "}
              <p>Till IMPALA.</p>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Section2;
