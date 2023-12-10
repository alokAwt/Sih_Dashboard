import React, { useState } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow"; 
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Add from "../Images/Add.png";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import BasicModal from "./Model/ProductModel";
import UserModel from "./Model/UserModel";
import Product from "../Pages/Product";

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
];

export default function ColumnTotalTable(page) {
  const classes = useStyles();
  let totalCost = 0;
  const [open, setOpen] = useState(false);

  // Finding the Total Cost
  rows.forEach((row) => (totalCost += row.price));

  console.log("hello", page.page);

  const fun = () => {
    setOpen(true);
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      {page.page === "Users" ? (
        <UserModel open={open} close={close}></UserModel>
      ) : null}

      <BasicModal></BasicModal>
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
          {page.page} List
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
                <DeleteOutlineIcon></DeleteOutlineIcon>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
