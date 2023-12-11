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
import UserModel from "../Model/UserModel";
import AlertDialog from "../Model/AlertDialog";

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
  createData(4, "Tomato", 2, 1.6),
  createData(5, "Mango", 1.5, 4),
];

export default function UserTable(page) {
  const classes = useStyles();
  let totalCost = 0;
  const [open, setOpen] = useState(false);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [editModelOpen, setEditModelOpen] = useState(false); // State for edit model
  const [selectedItem, setSelectedItem] = useState(null);

  // Finding the Total Cost
  rows.forEach((row) => (totalCost += row.price));

  const fun = () => {
    setOpen(true);
  };

  const close = () => {
    setOpen(false);
  };

  const OpenProduct = (item) => {
    setDeleteConfirmation(true);
    setSelectedItem(item);
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

  const openEditModel = () => {
    setEditModelOpen(true);
  };

  const closeEditModel = () => {
    setEditModelOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <UserModel open={open} close={close}></UserModel>
      <AlertDialog
        open={deleteConfirmation}
        title="Confirm Delete"
        content={`Are you sure you want to delete ${
          selectedItem ? selectedItem.item : ""
        }?`}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
      />

      <UserModel open={editModelOpen} close={closeEditModel}></UserModel>
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
          College Application List
        </h3>
        <img onClick={fun} style={{ marginRight: 20 }} src={Add}></img>
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
                onClick={openEditModel}
              >
                <EditOutlinedIcon></EditOutlinedIcon>
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
                <DeleteOutlineIcon
                  onClick={() => OpenProduct(row)}
                ></DeleteOutlineIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
