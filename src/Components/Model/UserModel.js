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

export default function UserModel(props) {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [role, setRole] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleAddUser = () => {
    // Perform any action you want when adding a user
    console.log("Adding user:", {
      username,
      email,
      role,
    });

    // Clear the form fields
    setUsername("");
    setEmail("");
    setRole("");
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
            Add User
          </Typography>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            value={username}
            onChange={handleUsernameChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={handleEmailChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Role"
            variant="outlined"
            fullWidth
            value={role}
            onChange={handleRoleChange}
            sx={{ mt: 2 }}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            value={role}
            onChange={handleRoleChange}
            sx={{ mt: 2 }}
          />
          <Button variant="contained" onClick={handleAddUser} sx={{ mt: 2 }}>
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
