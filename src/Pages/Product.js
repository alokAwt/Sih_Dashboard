import React from "react";
import "./Home.css";
import Headers from "../Components/Header";
import ColumnTotalTable from "../Components/Table";
import { PieChart } from "../Components/PieCharts";
import Add from "../Images/Add.png";
import Sidebar from "./SideBar";
import ProductTable from "../Components/Table/ProductTable";

const Product = () => {
  return (
    <div className="conatiner mb-5">
      <div className="row">
        <div className="col-2">
          <Sidebar ></Sidebar>
        </div>
        <div className="col-10 mt-5">
          <Headers page="Product"></Headers>
          <div className="row">
            <div className="col-12">
              <div
                style={{
                  width: "97%",
                  marginTop: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
               <ProductTable></ProductTable>
              </div>
            </div>
          </div>
          {/* <div
            style={{
              width: "98%",
              marginTop: 15,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <ColumnTotalTable page="Product"></ColumnTotalTable>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
