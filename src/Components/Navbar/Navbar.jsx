import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Team from "../Team/Team";
import Services from "../Services/Services";
import Features from "../Features/Features";
import PlansAndPricing from "../Plans-Pricing/Plans-Pricing";
import Contact from "../Contact/Contact";
import logo from "../../Assets/logoimage.png";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#F4E3D4",
    padding: "15px",
  },
  title: {
    flexGrow: 1,
  },
  links: {
    fontSize: "12px",
    marginRight: "25px",
    color: "#777777",
  },
  logo: {
    marginLeft: "25px",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img className={classes.logo} src={logo} alt="logo" />
            <Typography className={classes.title}></Typography>
            <Typography className={classes.links}>
              <Link className={classes.links} to="/Home">
                Home
              </Link>
              <Link className={classes.links} to="/Services">
                Services
              </Link>
              <Link className={classes.links} to="/Features">
                Features
              </Link>
              <Link className={classes.links} to="/Plans-Pricing">
                Plans-Pricing
              </Link>
              <Link className={classes.links} to="/Team">
                Team
              </Link>
              <Link className={classes.links} to="/Contact">
                Contact
              </Link>
            </Typography>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Services">
            <Services />
          </Route>
          <Route path="/Features">
            <Features />
          </Route>
          <Route path="/Plans-Pricing">
            <PlansAndPricing />
          </Route>
          <Route path="/Team">
            <Team />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
