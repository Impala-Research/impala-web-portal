import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Eye from "./Eye.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F9F1E9",
    height: "550px",
    margin: "15px",
  },
  img: {
    width: "30%",
    paddingTop: "40px",
  },
  typography: {
    paddingBottom: "40px",
  },
  button: {
    marginTop: "100px",
  },

});

export default function ServicesCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <img className={classes.img} src={Eye} alt="img"></img>
      <CardContent className={classes.CardContent}>
        <Typography className={classes.typography} color="primary">
          {props.title}
        </Typography>
        <Typography color="secondary">{props.text}</Typography>
      </CardContent>
      <Link to="/Services">
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
        >
          How it works
        </Button>
      </Link>
    </Card>
  );
}
