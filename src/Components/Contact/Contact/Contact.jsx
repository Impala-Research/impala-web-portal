import React from "react";
import {
  makeStyles,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "160px 0px 160px 0px ",
    backgroundColor: "#F9F1E9",
  },
  paper: {
    textAlign: "left",
    padding: theme.spacing(2),
    backgroundColor: "#F9F1E9",
    boxShadow: "none",
  },
  typography: {
    paddingBottom: "20px",
  },
}));

export default function Contact() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm={3}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper className={classes.paper}>
            <Typography
              className={classes.typography}
              variant="h5"
              color="primary"
            >
              Contact us:
            </Typography>
            <Typography color="secondary">
              We take our commitment to our users seriously. If you need our
              help with your user account, have questions about how to use the
              platform or are experiencing technical difficulties, please do not
              hesitate to contact us.
            </Typography>
            <form>
              <TextField
                id="outlined-margin-normal"
                defaultValue="Full Name"
                margin="normal"
                variant="outlined"
                fullWidth="200px"
              />
              <TextField
                id="outlined-margin-normal"
                defaultValue="E-mail Address"
                margin="normal"
                variant="outlined"
                fullWidth="200px"
              />
              <TextField
                id="outlined-textarea"
                multiline
                margin="normal"
                rows={5}
                fullWidth="200px"
                variant="outlined"
              />
            </form>
            <Button variant="contained" color="primary">
              Done!
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </div>
  );
}
