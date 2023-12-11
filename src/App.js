import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Collge";
import Product from "./Pages/Product";
import Login from "./Pages/Login/Login";
import AddSchlorship from "./Pages/AddSchlorship";
import ScholarshipPortal from "./Pages/AddSchlorship";
import ScholarshipDetailsScreen from "./Pages/Schlorship";
import College from "./Pages/Collge";
import UserDocumentsPage from "./Pages/Documents";
import Apilist from "./Pages/Apilist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Dashboard" element={<Home></Home>}></Route>
          <Route path="/Product" element={<Product></Product>}></Route>
          <Route path="/College" element={<College></College>}></Route>
          <Route path="/Doc" element={<UserDocumentsPage></UserDocumentsPage>}></Route>
          <Route path="/Api" element={<Apilist></Apilist>}></Route>
          <Route
            path="/add"
            element={<ScholarshipPortal></ScholarshipPortal>}
          ></Route>
          <Route
            path="/details"
            element={<ScholarshipDetailsScreen></ScholarshipDetailsScreen>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
