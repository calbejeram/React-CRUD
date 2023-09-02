import React from 'react';
import StudentsData from './StudentData';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function StudentBoard() {
  return (
    <div>
      <TableContainer component={Paper}>
      <Table sx={{ maxWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Student ID</TableCell>
            <TableCell align="center">Student Name</TableCell>
            <TableCell align="center">Student Grade</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {StudentsData.map((key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{key.studentId}</TableCell>
              <TableCell align="center">{key.studentName}</TableCell>
              <TableCell align="center">{key.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default StudentBoard;
