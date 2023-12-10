import React from "react";
import Sidebar from "./SideBar";

import "./Home.css";
import Headers from "../Components/Header";
import ColumnTotalTable from "../Components/Table";
import { PieChart } from "../Components/PieCharts";
import Add from "../Images/Add.png";
import Order from "../Components/Table/OrderTable";
import Product from "../Components/Table/ProductTable";
const Home = () => {
  return (
    <div className="conatiner mb-5">
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-10 mt-5">
          <Headers page="Dashboard"></Headers>
          <div className="row">
            <div className="col-8">
              <div
                style={{
                  width: "97%",
                  marginTop: 10,
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                <Order></Order>
              </div>
            </div>
            <div className="col-4 mt-3">
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 1",
                  boxShadow: "2px 2px 2px 2px rgb(239,239,239)",
                  borderRadius: 5,
                  height: "99%",
                  width: "100%",
                  position: "relative",
                  right: 20,
                }}
              >
                {" "}
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
                    Pie Chart
                  </h3>
                  <img style={{ marginRight: 20 }} src={Add}></img>
                </div>
                <div>
                  <PieChart></PieChart>
                </div>
                <div style={{ display: "flex" }}>
                  <div
                    style={{
                      width: "100%",
                      alignSelf: "center",
                      justifyContent: "space-between",
                      padding: 30,
                      marginLeft: "auto",
                    }}
                  >
                    <h3
                      style={{
                        marginLeft: 35,
                        fontSize: 16,
                        fontWeight: "500",
                        color: "rgba(43, 54, 116, 1)",
                      }}
                    >
                      Your Earning
                    </h3>
                    <h3
                      style={{
                        marginLeft: 35,
                        fontSize: 18,
                        fontWeight: "700",
                        color: "rgba(43, 54, 116, 1)",
                        textAlign: "center",
                      }}
                    >
                      63%
                    </h3>
                  </div>

                  <div
                    style={{
                      width: "100%",
                      alignSelf: "center",

                      justifyContent: "space-between",
                      padding: 30,
                      marginLeft: "auto",
                    }}
                  >
                    <h3
                      style={{
                        marginLeft: 35,
                        fontSize: 16,
                        fontWeight: "500",
                        color: "rgba(43, 54, 116, 1)",
                      }}
                    >
                      Your Selling
                    </h3>
                    <h3
                      style={{
                        marginLeft: 35,
                        fontSize: 18,
                        fontWeight: "700",
                        color: "rgba(43, 54, 116, 1)",
                        textAlign: "center",
                      }}
                    >
                      85%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              width: "98%",
              marginTop: 15,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <Product></Product>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
