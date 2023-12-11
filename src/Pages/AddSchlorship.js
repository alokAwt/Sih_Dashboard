import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  TextareaAutosize,
  AppBar,
  Toolbar,
} from "@mui/material";
import { styled } from "@mui/system";
import SidebarDash from "./SideBar";
import Headers from "../Components/Header";

const StyledContainer = styled(Container)({
  paddingTop: "40px",
  paddingBottom: "40px",
});

const StyledAppBar = styled(AppBar)({
  background: "rgba(43, 54, 116, 1)", // Updated background color
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledPaper = styled(Paper)({
  padding: "30px",
  borderRadius: "10px",
  boxShadow: "0px 4px 16px rgba(0, 0, 0, 0.1)",
  marginTop: "20px",
});

const StyledForm = styled("form")({
  marginTop: "20px",
});

const StyledButton = styled(Button)({
  marginTop: "16px",
  transition: "background-color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "#1976D2",
  },
});

const ScholarshipInputPortal = () => {
  const [formValues, setFormValues] = useState({
    scholarshipName: "",
    description: "",
    eligibility: "",
    deadline: "",
    amount: "",
    documentsRequired: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFormSubmit = () => {
    // Add your logic to handle form submission
    console.log("Form values submitted:", formValues);
    // You can send the formValues to your backend or perform other actions
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SidebarDash></SidebarDash>
        </div>
        <div className="col-10">


          <StyledContainer style={{ marginTop:10 }}>
            <StyledPaper elevation={3} >
              <StyledForm>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Scholarship Name"
                      name="scholarshipName"
                      value={formValues.scholarshipName}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Description"
                      name="description"
                      multiline
                      rows={4}
                      value={formValues.description}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Eligibility"
                      name="eligibility"
                      multiline
                      rows={2}
                      value={formValues.eligibility}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Deadline"
                      name="deadline"
                      type="date"
                      value={formValues.deadline}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Amount"
                      name="amount"
                      value={formValues.amount}
                      onChange={handleInputChange}
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextareaAutosize
                      aria-label="Documents Required"
                      name="documentsRequired"
                      minRows={3}
                      placeholder="Enter required documents separated by commas"
                      value={formValues.documentsRequired}
                      onChange={handleInputChange}
                      style={{
                        width: "100%",
                        padding: "10px",
                        resize: "vertical",
                      }}
                      required
                    />
                  </Grid>
                </Grid>
                <StyledButton
                  variant="contained"
                  color="primary"
                  onClick={handleFormSubmit}
                >
                  Publish Scholarship
                </StyledButton>
              </StyledForm>
            </StyledPaper>
          </StyledContainer>
        </div>
      </div>
    </div>
  );
};

export default ScholarshipInputPortal;
