import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function ProductModel(props) {
  const [open, setOpen] = React.useState(false);
  const [productName, setProductName] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [file, setFile] = React.useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleAddProduct = () => {
    // Perform any action you want when adding a product
    console.log("Adding product:", {
      productName,
      quantity,
      price,
      file,
    });

    // Clear the form fields
    setProductName("");
    setQuantity("");
    setPrice("");
    setFile(null);
    // Close the modal
    handleClose();
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add Product
          </Typography>
          <TextField
            label="Product Name"
            variant="outlined"
            fullWidth
            value={productName}
            onChange={handleProductNameChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Quantity"
            variant="outlined"
            fullWidth
            value={quantity}
            onChange={handleQuantityChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Price"
            variant="outlined"
            fullWidth
            value={price}
            onChange={handlePriceChange}
            sx={{ mt: 2 }}
          />
          <FormControl fullWidth sx={{ mt: 2 }}>
           
            <Input
              type="file"
              id="file-input"
              accept=".jpg, .jpeg, .png"
              onChange={handleFileChange}
            />
          </FormControl>
          <Button variant="contained" onClick={handleAddProduct} sx={{ mt: 2 }}>
            Add
          </Button>
          <Button onClick={props.close} sx={{ mt: 2, marginLeft: 2 }}>
            Close
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
