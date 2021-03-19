import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import logo from "../../Assets/logoimage.png";
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
    <div className="Navbar">
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <img  src={logo} alt="logo" />
          <Typography className={classes.title}></Typography>
          <Typography  className={classes.links}>
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
    </div>
  );
}
export default Navbar;
