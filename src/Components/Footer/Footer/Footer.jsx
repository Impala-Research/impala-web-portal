import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import logo from "../../../Assets/Logo-img.png";
import { Link } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#F4E3D4",
    padding: theme.spacing(3, 0),
  },
  links: {
    fontSize: "12px",
    marginRight: "20px",
    color: "#707070",
    paddingLeft: "40px",
    display: "flex",
    textAlign: "center",
  },

}));

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      <Grid container>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt="logo" />
          </Link>{" "}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Link className={classes.links} to="/">
            Home
          </Link>
          <Link className={classes.links} to="/Services">
            Services
          </Link>
          <Link className={classes.links} to="/Features">
            Features
          </Link>
          <Link className={classes.links} to="/Plans-Pricing">
            Plans And Pricing
          </Link>
          <Link className={classes.links} to="/Team">
            Team
          </Link>
          <Link className={classes.links} to="/Contact">
            Contact
          </Link>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Paper></Paper>
        </Grid>
      </Grid>
    </Typography>
  );
}

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Copyright />
      </Container>
    </footer>
  );
}
