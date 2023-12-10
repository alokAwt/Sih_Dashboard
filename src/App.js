import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Product from "./Pages/Product";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/Dashboard" element={<Home></Home>}></Route>
          <Route path="/Product" element={<Product></Product>}></Route>
          <Route path="/users" element={<Users></Users>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
