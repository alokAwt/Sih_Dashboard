import React from "react";
import "./Home.css";
import Headers from "../Components/Header";
import ColumnTotalTable from "../Components/Table";
import { PieChart } from "../Components/PieCharts";
import Add from "../Images/Add.png";
import Sidebar from "./SideBar";
import UserTable from "../Components/Table/UserTable";

const Users = () => {
  return (
    <div className="conatiner mb-5">
      <div className="row">
        <div className="col-2">
          <Sidebar></Sidebar>
        </div>
        <div className="col-10 mt-5">
          <Headers page="Users" ></Headers>
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
               <UserTable></UserTable>
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
            <ColumnTotalTable page="Users"></ColumnTotalTable>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Users;
