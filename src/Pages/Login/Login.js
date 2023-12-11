import React from "react";
import {
  Button,
  TextField,
  IconButton,
  InputAdornment,
  Box,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LockIcon from "@mui/icons-material/Lock";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#f5f5f5", // Set a light background color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: 400, // Set the width to a larger value
          padding: 4, // Increase the padding
          borderRadius: 2, // Round the corners
          boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", // Add a subtle box shadow
          backgroundColor: "#ffffff", // Set a white background color
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: 40, // Increase the font size
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
            }}
          >
            Vitaran
          </h1>
        </div>
        <TextField
          label="Username"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <MailOutlineIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mt: 2 }}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <VisibilityIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{ mt: 2 }}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => navigate("/Dashboard")}
        >
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;
