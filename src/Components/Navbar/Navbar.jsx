import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "../../Assets/logoimage.png";
import Home from "../Home/Home";
import Services from "../Services/Services";
import Features from "../Features/Features";
import PlansAndPricing from "../Plans-Pricing/Plans-Pricing";
import Team from "../Team/Team";
import Contact from "../Contact/Contact";

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
    marginRight: "20px",
    color: "#777777",
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <div>
      <Router>
        <CssBaseline />
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <img src={logo} alt="logo" />
            <Typography className={classes.title}></Typography>
            <Typography className={classes.links}>
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
          <Route exact path="/" component={Home} />
          <Route path="/Services" component={Services} />
          <Route path="/Features" component={Features} />
          <Route path="/Plans-Pricing" component={PlansAndPricing} />
          <Route path="/Team" component={Team} />
          <Route path="/Contact" component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}
export default Navbar;
