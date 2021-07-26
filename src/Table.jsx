import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
    },
});

function createData(hours, conversion) {
    return { hours, conversion };
}

const rows = [
    createData(40, "1 FTE"),
    createData(36, ".9"),
    createData(32, ".8"),
    createData(28, ".7"),
    createData(24, ".6"),
    createData(20, ".5"),
    createData(16, ".4"),
    createData(12, ".3"),
    createData(8, ".2"),
    createData(4, ".1"),
];

const BasicTable = () => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Hours</TableCell>
                        <TableCell >Conversion</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.hours}>
                            <TableCell component="th" scope="row">
                                {row.hours}
                            </TableCell>
                            <TableCell >{row.conversion}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BasicTable;