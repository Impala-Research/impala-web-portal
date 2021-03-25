import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import Benefits from "../../../SharedComponents/Benefits/Beneftis";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "125px 0px 125px 0px ",
    backgroundColor: "#F9F1E9",
    flexGrow: 1,
  },
  paper: {
    backgroundColor: "#F9F1E9",
    textAlign: "left",
    color: theme.palette.text.secondary,
    boxShadow: "none",
  },
}));

export default function Section4() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={1}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Benefits
              title="Flexible access 24/7"
              text="IMPALA is designed for you to use the platform at any time at any speed that you feel comfortable with. No pre-knowledge is needed. However, if you have any questions our team is available for questions of any kind.
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Benefits
              title="Advanced out-of-the-box data"
              text="The latest implicit techniques used will provide you with data you had no access to before. We made sure that the complex data is presented to you in a simple and easy-to-read way (see gallery above).
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Benefits
              title="React faster than ever"
              text="Impala provides insights for fast decisions, as your results can be delivered immediately after the needed data has been collected.
"
            />
          </Paper>
        </Grid>
        <Grid item sm={1}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }
  function FormRow2() {
    return (
      <React.Fragment>
        <Grid item xs={12} sm={1}>
          <Paper className={classes.paper}></Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            <Benefits
              title="Act and grow globally"
              text="Different cultures are not a barrier for IMPALA as implicit metrics are culture free. You can conduct different projects for different markets simultaneously, all around the globe. IMPALA guarantees no confusion in data interpretation and implementation.
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Benefits
              title="Fair price packages based on tools"
              text="At IMPALA price packages are based on tools, not on response rates. It’s important for IMPALA that no matter if you’re an individual, a cooperate, a startup or a university, you can conduct global studies for fair and affordable prices.
"
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            How you Benefit ?
          </Typography>
        </Grid>
      </Grid>
      <Grid container>
        <FormRow />
      </Grid>
      <Grid container>
        <FormRow2 />
      </Grid>
    </div>
  );
}
