import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Add from "../../Images/Add.png";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ProductModel from "../Model/ProductModel";
import EditProduct from "../Model/EditProduct";
import AlertDialog from "../Model/AlertDialog";
import { Navigate, useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  finalRow: {
    backgroundColor: "lightblue",
  },
});

function createData(number, item, qty, price) {
  return { number, item, qty, price };
}

const rows = [
  createData(1, "Apple", 5, 3),
  createData(2, "Orange", 2, 2),
  createData(3, "Grapes", 3, 1),
  createData(4, "Tomato", 2, 1.6),
  createData(5, "Mango", 1.5, 4),
  createData(3, "Grapes", 3, 1),
];

export default function ProductTable(page) {
  const navigate=useNavigate()
  const classes = useStyles();
  let totalCost = 0;
  const [open, setOpen] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false); // State for delete confirmation
  const [selectedItem, setSelectedItem] = useState(null);

  // Finding the Total Cost
  rows.forEach((row) => (totalCost += row.price));

  const openADDProduct = () => {
    setOpen(true);
  };

  const closeProduct = () => {
    setOpen(false);
  };

  const OpenProduct = (item) => {
    setDeleteConfirmation(true);
    setSelectedItem(item);
  };

  const EditProductHandler = () => {
    setEdit(true);
  };

  const CloseEdit = () => {
    setEdit(false);
  };

  const handleDeleteConfirm = () => {
    // Handle delete logic here
    // You can filter out the selected item from the rows array
    const updatedRows = rows.filter((row) => row !== selectedItem);
    // Update the rows state with the filtered array
    // setRows(updatedRows);
    setDeleteConfirmation(false); // Close the confirmation dialog
  };

  const handleDeleteCancel = () => {
    setDeleteConfirmation(false); // Close the confirmation dialog
  };

  return (
    <TableContainer component={Paper}>
      <ProductModel open={open} close={closeProduct}></ProductModel>
      <EditProduct open={edit} close={CloseEdit}></EditProduct>
      <AlertDialog
        open={deleteConfirmation}
        title="Confirm Delete"
        content={`Are you sure you want to delete ${
          selectedItem ? selectedItem.item : ""
        }?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />
      <div
        style={{
          width: "100%",
          alignSelf: "center",
          display: "flex",
          justifyContent: "space-between",
          padding: 30,
          marginLeft: "auto",
        }}
      >
        <h3
          style={{
            marginLeft: 35,
            fontSize: 24,
            fontWeight: "700",
            color: "rgba(43, 54, 116, 1)",
          }}
        >
          Application List
        </h3>
        <img
          onClick={openADDProduct}
          style={{ marginRight: 20 }}
          src={Add}
          alt="Add Product"
        ></img>
      </div>

      <Table
        aria-label="simple table"
        style={{
          width: "99%",
          marginLeft: "auto",
          marginRight: "auto",
          border: "none", // Add this line to center the table
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <p
                style={{
                  fontSize: 14,
                  color: "rgba(163, 174, 208, 1)",
                  fontWeight: "500",
                }}
              >
                S.No
              </p>
            </TableCell>
            <TableCell align="center">
              {" "}
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(163, 174, 208, 1)",
                  fontWeight: "500",
                }}
              >
                Item
              </p>
            </TableCell>
            <TableCell align="center">
              {" "}
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(163, 174, 208, 1)",
                  fontWeight: "500",
                }}
              >
                Quantity
              </p>
            </TableCell>
            <TableCell align="center">
              {" "}
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(163, 174, 208, 1)",
                  fontWeight: "500",
                }}
              >
                Edit
              </p>
            </TableCell>
            <TableCell align="center">
              {" "}
              <p
                style={{
                  fontSize: 18,
                  color: "rgba(163, 174, 208, 1)",
                  fontWeight: "500",
                }}
              >
                Delete
              </p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.number}>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
              >
                {row.item}
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
              >
                {row.item}
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
              >
                {row.qty}
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
                onClick={()=>navigate("/doc")}
              >
                {row.qty}
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
                onClick={EditProductHandler}
              >
                <EditOutlinedIcon />
              </TableCell>
              <TableCell
                align="center"
                style={{
                  fontWeight: "700",
                  fontSize: 14,
                  color: "rgba(43, 54, 116, 1)",
                  textAlign: "center",
                }}
              >
                <DeleteOutlineIcon onClick={() => OpenProduct(row)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
