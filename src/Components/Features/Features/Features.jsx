import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Benefits from "../../../SharedComponents/Benefits/Beneftis";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "130px 0px 120px 0px ",
    backgroundColor: "#FFFFFF",
  },
  root1: {
    padding: "130px 0px 120px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
  },
  paper1: {
    paddingBottom: "30px",
    textAlign: "center",
    padding: theme.spacing(2),
    backgroundColor: "#FFFFFF",
    boxShadow: "none",
  },
  paper2: {
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
}));

export default function Features() {
  const classes = useStyles();

  return (
    <div className="features">
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper className={classes.paper1}>
              <Typography variant="h4" color="primary">
                Features
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Paper></Paper>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <Typography variant="subtitle1" color="secondary">
                Impala is the first neuromarketing DIY platform that enables you
                to gain a deep understaFnding of consumer behavior without
                consulting a 3rd party. In your own time and speed, you can
                collect out of the box data that will take your marketing and
                business strategy to a new level.
              </Typography>
            </Paper>
            <Paper className={classes.paper}>
              <Typography variant="h5" color="primary">
                But before you are ready to do so, you need to understand:
              </Typography>
              <Typography variant="subtitle1" color="secondary">
                <ul>
                  <li>what data do you actually need to collect;</li>
                  <li>
                    what are the best measurement tools for your needs
                    (innovative or classic measurement tools);
                  </li>
                  <li>
                    how you interpret and get insights from the data collected
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <Typography variant="h5" color="primary">
                Our services are designed for helping and guiding you through
                the process of collecting the right data and drawing the right
                conclusions of the outcomes.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
      <div className={classes.root1}>
        <Grid container>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper2}>
              <Benefits
                title="Market Research Tools"
                text="At IMPALA, we provide you with the latest innovative measurement tools such as Eyetracking, Emotional Recognition, IAT and Virtual Shopping as well to best classic research tools.
Sometimes only one measurement tool is needed to detect the information needed – sometimes it is a combination of several tools. We are happy to advise you on choosing the best tools and guide you in how to use them."
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper2}>
              <Benefits
                title="Data Analysis"
                text="To collect data is one thing, to understand it a totally different one. We can guide you on how to analyze your data for each respondent so can analyze case by case or on group (sample) level."
              />
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
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper2}>
              <Benefits
                title="Data Collection"
                text="In many cases understanding consumer’s behavior is not everything – but actual data is crucial for creating the big picture. We can help you understand what data to collect and how to do it on our platform."
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper2}>
              <Benefits
                title="Consultancy"
                text="As complex and specific consumer behavior can be, as specific and unique are the needs of every business. That’s why we strongly believe that every business should have a customized solution based on their needs and requests.
              We are happy to advise on any questions you have and work on a solution together in order to ensure best results possible."
              />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper></Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
