import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Grid from "@material-ui/core/Grid";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, activeSubstance, grams, description) {
  return {
    name,
    activeSubstance,
    grams,
    description,
    specificsOfPatients: [
      {
        name: "2020-01-05",
        grams: "11091700",
        description:
          "description description descriptiondescription description description description",
      },
      { name: "2020-01-05", grams: "11091700", description: "" },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.activeSubstance}</TableCell>
        <TableCell align="right">{row.grams}</TableCell>
        <TableCell
          align="right"
          style={{
            whiteSpace: "normal",
            wordWrap: "break-word",
            maxWidth: "100px",
          }}
        >
          {row.description}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Особливості людини
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Назва особливості</TableCell>
                    <TableCell>Грами</TableCell>
                    <TableCell align="right">Опис</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.specificsOfPatients.map((specific, i) => (
                    <TableRow key={specific.name + i}>
                      <TableCell component="th" scope="row">
                        {specific.name}
                      </TableCell>
                      <TableCell>{specific.grams}</TableCell>
                      <TableCell
                        align="right"
                        style={{
                          whiteSpace: "normal",
                          wordWrap: "break-word",
                          maxWidth: "100px",
                        }}
                      >
                        {specific.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ rowData }) {
  const { drugs } = rowData;

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Назва</TableCell>
            <TableCell align="right">Діюча речовина</TableCell>
            <TableCell align="right">Грами (g)</TableCell>
            <TableCell align="right">Опис</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drugs.map((row, i) => (
            <Row key={row.name + i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
