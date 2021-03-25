import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  demo: {
    backgroundColor: " #F9F1E9",
    borderStyle: "solid",
    margin: "25px",
    borderColor: "white",
    borderRadius: "7px",
  },
  title1: {
    paddingTop: "15px",
  },
  title2: {
    paddingBottom: "15px",
    borderBottom: "solid white 1px",
  },
}));

export default function TableList1(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item>
        <div className={classes.demo}>
          <Typography color="secondary" variant="h6" className={classes.title1}>
            {props.title1}
          </Typography>
          <Typography variant="h5" color="primary" className={classes.title2}>
            {props.title2}
          </Typography>
          <List>
            <ListItem>
              <ListItemText>
                <ul>
                  <li>{props.text1}</li>
                </ul>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {" "}
                <ul>
                  <li>{props.text2}</li>
                </ul>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {" "}
                <ul>
                  <li>{props.text3}</li>
                </ul>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                {" "}
                <ul>
                  <li>{props.text4}</li>
                </ul>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Grid>
    </Grid>
  );
}
