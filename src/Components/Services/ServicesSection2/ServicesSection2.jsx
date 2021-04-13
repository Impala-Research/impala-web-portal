import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "30px 0px 0px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    paddingTop: "40px",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  typography: {
    paddingBottom: "16px",
    paddingTop: "10px",
  },
}));

export default function ServicesSection2a(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={10}>
          <Paper className={classes.paper}>
            <Typography
              variant="h4"
              className={classes.typography}
              color="primary"
            >
              {props.title}
            </Typography>
            <Typography   variant="subtitle1" className={classes.typography} color="secondary">
              {props.text}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
