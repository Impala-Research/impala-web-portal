import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import ServicesCard from "../Section5/ServicesCard";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "100px 0px 0px 0px ",
    flexGrow: 1,
    backgroundColor: "#ffffff",
    paddingLeft:"50px"
  },
  typography1: {
    paddingBottom: "90px",
  },
  typography2: {
    paddingTop: "120px",
  },
}));

export default function Section5() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography
            className={classes.typography1}
            variant="h4"
            color="primary"
          >
            Services
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <ServicesCard
            title="Eye Tracking"
            text="Eye Tracking is a technology that allows you to understand what a person is really looking at while watching advertising, viewing design layouts, browsing a website, etc. It is the most objective method to...........................
"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <ServicesCard
            title="Emotional recognition"
            text="Emotional Recognition through face Emotions define how we feel about certain things, facial expressions are the most obvious way to show those feelings. However, identifying human emotions in digitalization has always been a challenge...
"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <ServicesCard
            title="IAT - Test of Implicit Associations"
            text="IYour customers or/and target groups have only limited access to their own thoughts and preferences. Also, traditional research methods are limited in developing deeper insights. As a result, market researchers across the globe embrace...
"
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <ServicesCard
            title="Virtual Shopping"
            text="Most of the decisions for purchase are made in front of shelves. By exposing respondents to shelves you create an almost identical situation to a real shopping experience and as result receive crucial information... result receive 
"
          />
        </Grid>

        <Grid item xs={12} sm={2}>
          <ServicesCard
            title="Traditional Market Research tools"
            text="Implicit research techniques are highly advanced in detecting behavior, from a human and consumer perspective. However, they have no capacity to discover the reasons behind such as…
              We from IMPALA strongly believe that those reasons...
"
          />
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Typography className={classes.typography2} variant="h4" color="primary">
        Our surveys are used by:
      </Typography>
    </div>
  );
}
