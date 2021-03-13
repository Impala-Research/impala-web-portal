import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "../Home/Home";
import Team from "../Team/Team";
import Services from "../Services/Services";
import Features from "../Features/Features";
import PlansAndPricing from "../Plans-Pricing/Plans-Pricing";
import Contact from "../Contact/Contact";
import logo from "../../Assets/logoimage.png";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#F4E3D4",
  },

  title: {},
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <AppBar position="static"className={classes.root} >
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <img src={logo} alt="logo" className={classes.logo} />
            </IconButton>
            <Typography className={classes.title}>
              <p>
                {" "}
                <Link to="/Home">Home</Link>
              </p>
            </Typography>
            <Typography className={classes.title}>
              <p>
                <Link to="/Services">Services</Link>
              </p>
            </Typography>

            <Typography className={classes.title}>
              <p>
                <Link to="/Features">Features</Link>
              </p>
            </Typography>
            <Typography className={classes.title}>
              <p>
                <Link to="/Plans-Pricing">Plans-Pricing</Link>
              </p>
            </Typography>
            <Typography className={classes.title}>
              <p>
                <Link to="/Team">Team</Link>
              </p>
            </Typography>
            <Typography className={classes.title}>
              <p>
                <Link to="/Contact">Contact</Link>
              </p>
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
