import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import logo from "../../../Assets/Logo-img.png";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#F4E3D4",
    padding: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "space-evenly",
  },
  links: {
    fontSize: "12px",
    marginRight: "20px",
    // "&:active": {
    //   color: " red",
    // },
    color: "#707070",
  },
}));

const Header = (props) => {
  const { history } = props;
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const menuItems = [
    {
      menuTitle: "Home",
      pageURL: "/",
    },
    {
      menuTitle: "Services",
      pageURL: "/Services",
    },
    {
      menuTitle: "Features",
      pageURL: "/Features",
    },
    {
      menuTitle: "Plans-Pricing",
      pageURL: "/Plans-Pricing",
    },
    {
      menuTitle: "Team",
      pageURL: "/Team",
    },
    {
      menuTitle: "Contact",
      pageURL: "/Contact",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <Typography className={classes.title}></Typography>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map((menuItem) => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </>
          ) : (
            <Typography className={classes.links} selected>
              <Link selected className={classes.links} to="/">
                Home
              </Link>
              <Link selected className={classes.links} to="/Services">
                Services
              </Link>
              <Link className={classes.links} to="/Features">
                {" "}
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
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Header);
