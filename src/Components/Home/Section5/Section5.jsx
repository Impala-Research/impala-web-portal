import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ServicesCard from "../Section5/ServicesCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "150px 0px 150px 0px ",
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#F9F1E9",
    color: theme.palette.text.secondary,
    boxShadow: "none",
    margin: "20px",
  },
}));

export default function Section5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            Services
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <ServicesCard
              title="Eye Tracking"
              text="Eye Tracking is a technology that allows you to understand what a person is really looking at while watching advertising, viewing design layouts, browsing a website, etc. It is the most objective method to...
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <ServicesCard
              title="Emotional recognition through face"
              text="Emotional Recognition through face Emotions define how we feel about certain things, facial expressions are the most obvious way to show those feelings. However, identifying human emotions in digitalization has always been a challenge...
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <ServicesCard
              title="IAT - Test of Implicit Associations"
              text="IYour customers or/and target groups have only limited access to their own thoughts and preferences. Also, traditional research methods are limited in developing deeper insights. As a result, market researchers across the globe embrace...
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <ServicesCard
              title="Virtual Shopping"
              text="Most of the decisions for purchase are made in front of shelves. By exposing respondents to shelves you create an almost identical situation to a real shopping experience and as result receive crucial information...
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper className={classes.paper}>
            <ServicesCard
              title="Traditional Market Research tools"
              text="Implicit research techniques are highly advanced in detecting behavior, from a human and consumer perspective. However, they have no capacity to discover the reasons behind such as…
              We from IMPALA strongly believe that those reasons...
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Typography variant="h4" color="primary">
        Our surveys are used by:
      </Typography>
    </div>
  );
}
