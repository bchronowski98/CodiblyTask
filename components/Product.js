import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

function Product(props) {
  return (
    <TableRow sx={{ backgroundColor: props.product.color }}>
      <TableCell component="th" scope="row">
        {props.product.id}
      </TableCell>
      <TableCell>{props.product.name}</TableCell>
      <TableCell>{props.product.year}</TableCell>
    </TableRow>
  );
}

export default Product;
