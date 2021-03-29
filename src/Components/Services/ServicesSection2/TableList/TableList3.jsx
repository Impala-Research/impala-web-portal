import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  demo: {
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

export default function TableList3(props) {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.demo}>
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
          <ListItem>
            <ListItemText>
              {" "}
              <ul>
                <li>{props.text5}</li>
              </ul>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              {" "}
              <ul>
                <li>{props.text6}</li>
              </ul>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              {" "}
              <ul>
                <li>{props.text7}</li>
              </ul>
            </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}
