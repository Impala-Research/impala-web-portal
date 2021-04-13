import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    padding: "50px",
  },
  div: {
    paddingBottom: "20px",
  },
});

function createData(NoOfRespondents, OneModule, AllModules) {
  return { NoOfRespondents, OneModule, AllModules };
}

const rows = [
  createData("100", 200, 300),
  createData("500", 850, 1275),
  createData("1000", 1500, 2250),
  createData("2000", 2500, 3750),
  createData("3000", 3000, 4500),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer className={classes.table} component={Paper}>
      <div className={classes.div}>
        <Typography variant="h5" color="primary">
          Enterprises
        </Typography>
        <Typography
          className={classes.typography}
          variant="body"
          color="secondary"
        >
          Just select your most appropriate option
        </Typography>
      </div>

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">No.of respondents</TableCell>
            <TableCell>One module</TableCell>
            <TableCell>All modules</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.NoOfRespondents}
              </TableCell>
              <TableCell>{row.OneModule} Euros</TableCell>
              <TableCell>{row.AllModules} Euros</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
