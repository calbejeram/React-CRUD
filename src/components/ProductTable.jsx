import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ProductTable({Array}) {
  return (
    <div>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Product ID</TableCell>
            <TableCell align="center">Product Name</TableCell>
            <TableCell align="center">Product Description</TableCell>
            <TableCell align="center">Product Price</TableCell>
            <TableCell align="center">Product Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Array.map((Arr) => (
            <TableRow
              key={Arr.productId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{Arr.productId}</TableCell>
              <TableCell align="center">{Arr.productName}</TableCell>
              <TableCell align="center">{Arr.productDescription}</TableCell>
              <TableCell align="center">{Arr.productPrice}</TableCell>
              <TableCell align="center">{Arr.productQuantity}</TableCell>
              <TableCell align="center"><button className='btn btn-warning' onClick={() => alert(JSON.stringify(Array))}>Edit</button></TableCell>
              <TableCell align="center"><button className='btn btn-danger'>Delete</button></TableCell>
              {/* onClick={() => handleDelete(Array.productId)} */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default ProductTable;