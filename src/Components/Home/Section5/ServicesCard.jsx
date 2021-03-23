import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  makeStyles,
} from "@material-ui/core";
import Eye from "./Eye.png";
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
