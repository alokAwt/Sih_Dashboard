import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AddIcon from "@mui/icons-material/Add";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SchoolIcon from "@mui/icons-material/School"; // Import the new icon for "College"
import { Link } from "react-router-dom";
import "./Home.css";

const SidebarDash = () => {
  const location = useLocation();
  const [activeMenuItem, setActiveMenuItem] = useState(location.pathname);

  React.useEffect(() => {
    setActiveMenuItem(location.pathname);
  }, [location.pathname]);

  return (
    <div>
      <Sidebar style={{ height: "100vh", position: "fixed" }}>
        <Menu>
          <div>
            <h1
              style={{
                fontFamily: "Poppins",
                fontSize: 30,
                fontWeight: "700",
                textAlign: "center",
                color: "rgba(43, 54, 116, 1)",
                marginTop: 45,
              }}
            >
              Vitaran
            </h1>
          </div>
          <hr style={{ marginTop: 50 }}></hr>
          <MenuItem
            component={<Link to="/Dashboard" />}
            icon={
              <HomeOutlinedIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/Dashboard" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/Dashboard"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            Dashboard
          </MenuItem>
          <MenuItem
            component={<Link to="/Product" />}
            icon={
              <ShoppingCartOutlinedIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/Product" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/Product"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            Application
          </MenuItem>
          <MenuItem
            component={<Link to="/details" />}
            icon={
              <PeopleOutlinedIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/details" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/details"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            Scholarship
          </MenuItem>
          <MenuItem
            component={<Link to="/add" />}
            icon={
              <AddIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/add" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/add"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            Add Scholarship
          </MenuItem>
          <MenuItem
            component={<Link to="/Api" />}
            icon={
              <ListAltIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/Api" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/Api"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            API List
          </MenuItem>
          <MenuItem
            component={<Link to="/College" />} // Add the route for "College"
            icon={
              <SchoolIcon
                style={{ color: "rgba(67, 24, 255, 1)", height: 28, width: 26 }}
              />
            }
            className={activeMenuItem === "/College" ? "active" : ""}
            style={{
              fontSize: 16,
              fontWeight: "700",
              color: "rgba(43, 54, 116, 1)",
              backgroundColor:
                activeMenuItem === "/College"
                  ? "rgba(67, 24, 255, 0.1)"
                  : "transparent",
            }}
          >
            College
          </MenuItem>
          <div style={{ flex: 1 }}></div>
          <div
            style={{
              position: "absolute",
              bottom: 80,
            }}
          >
            <MenuItem
              component={<Link to="/College" />}
              icon={
                <ExitToAppOutlinedIcon
                  style={{
                    color: "rgba(67, 24, 255, 1)",
                    height: 38,
                    width: 36,
                  }}
                />
              }
              className={activeMenuItem === "/College" ? "active" : ""}
              style={{
                fontSize: 20,
                fontWeight: "700",
                color: "rgba(43, 54, 116, 1)",
                backgroundColor:
                  activeMenuItem === "/"
                    ? "rgba(67, 24, 255, 0.1)"
                    : "transparent",
              }}
            >
              Logout
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarDash;