import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../../Assets/Logo-img.png";

const useStyles = makeStyles(() => ({
  appBar: {
    backgroundColor: "#F4E3D4",
    padding: "10px",
  },
  title: {
    flexGrow: 1,
  },
  links: {
    fontSize: "12px",
    marginRight: "20px",
    color: "#707070",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
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
            Plans And Pricing
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
  );
}
export default Navbar;
