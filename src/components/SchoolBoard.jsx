import React from 'react'
import BoardData from './BoardData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function SchoolBoard() {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Post</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {BoardData.map((key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{key.id}</TableCell>
              <TableCell align="center">{key.category}</TableCell>
              <TableCell align="center">{key.post}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default SchoolBoard;
