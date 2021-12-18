import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from 'antd';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 2,
    },
}));

function createData(name, fname, members, salary) {
    return { name, fname, members, salary };
}

const rows = [
    createData('mustafa', 159, 6.0, 24, 4.0),
    createData('ahmed', 237, 9.0, 37, 4.3),
    createData('akif', 262, 16.0, 24, 6.0),

];

export default function Rejected() {
    return (
      <div>
          <h1 style={{textAlign:'center',marginLeft: '20%' }}>Rejected Requests</h1>
        <TableContainer style={{ width: '100%', marginLeft: '20%' }} component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow style={{ backgroundColor: '#1976d2' }}>
                        <StyledTableCell style={{ backgroundColor: '#1976d2' }}>Name </StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#1976d2' }} align="right">Father Name</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#1976d2' }} align="right">Family members</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#1976d2' }} align="right">Salary(PKR)</StyledTableCell>
                        <StyledTableCell style={{ backgroundColor: '#1976d2',marginLeft:'40px' }} align="right">Status</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.fname}</StyledTableCell>
                            <StyledTableCell align="right">{row.members}</StyledTableCell>
                            <StyledTableCell align="right">{row.salary}</StyledTableCell>
                            <StyledTableCell align="right">Denied</StyledTableCell>
                            
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </div>
    );
}
