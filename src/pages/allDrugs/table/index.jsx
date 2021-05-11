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

const useRowStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

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
        <TableCell align="right">{row.contraindicationDrug}</TableCell>
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
                    <TableCell align="right">Опис</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.specificsOfPatients?.map((specific, i) => (
                    <TableRow key={specific.feature.name + i}>
                      <TableCell component="th" scope="row">
                        {specific.feature.name}
                      </TableCell>
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

export default function CollapsibleTable(props) {
  const { drugs } = props?.rowData;
  const classes = useRowStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Діюча речовина</TableCell>
            <TableCell align="right">Не вживати з</TableCell>
            <TableCell align="right">Опис</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{ maxHeight: "500px" }}>
          {drugs.map((row, i) => (
            <Row key={row.name + i} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
