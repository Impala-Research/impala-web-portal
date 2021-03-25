import React from "react";
import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import TableList1 from "./TableList/TableList1";
import TableList2 from "./TableList/TableList2";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "60px 0px 10px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    paddingTop: "60px",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  typography: {
    paddingBottom: "16px",
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
          </Paper>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <TableList1
            title1="With eye tracking you can "
            title2="Detect"
            text1="Where the sight is focused"
            text2="What is the users gaze pattern"
            text3="Which element is seen first, second, third etc."
            text4="How long is the user's eye focused on specific Area of interest (AOI)"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TableList2
            title1="With eye tracking you can "
            title2="Test"
            text1="Video materials"
            text2="Live Websites (UX/UI)"
            text3="Images (print ads, online banners, etc.)"
            text4="Packages/product concept"
            text5="Product shelf placement"
          />
        </Grid>
      </Grid>
    </div>
  );
}
