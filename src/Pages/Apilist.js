import React from "react";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Button,
} from "@mui/material";
import DescriptionIcon from "@mui/icons-material/Description";
import SidebarDash from "./SideBar";
import Headers from "../Components/Header";

const Apilist = () => {
  // Example data: Replace this with your user's document data
  const userDocuments = [
    {
      id: 1,
      name: "https://vercel.com/dashboard",
      url: "https://vercel.com/dashboard",
    },
    {
      id: 2,
      name: "https://vercel.com/dashboard",
      url: "https://vercel.com/dashboard",
    },
    {
      id: 3,
      name: "https://vercel.com/dashboard",
      url: "https://vercel.com/dashboard",
    },
    // Add more documents as needed
  ];

  const handleViewDocument = (url) => {
    // Handle the action to view the document, e.g., open in a new tab or modal
    window.open(url, "_blank");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <SidebarDash></SidebarDash>
        </div>
        <div className="col-10">
          <Container style={{ marginTop: "40px" }}>
            <Headers page="Documnets"></Headers>
            <Paper elevation={3} style={{ padding: "20px" }}>
              {userDocuments.length > 0 ? (
                <List>
                  {userDocuments.map((document) => (
                    <React.Fragment key={document.id}>
                      <ListItem>
                        <ListItemIcon>
                          <DescriptionIcon />
                        </ListItemIcon>
                        <ListItemText primary={document.name} />
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => handleViewDocument(document.url)}
                        >
                          View
                        </Button>
                      </ListItem>
                      <Divider />
                    </React.Fragment>
                  ))}
                </List>
              ) : (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                >
                  No documents available for this user.
                </Typography>
              )}
            </Paper>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default Apilist;
