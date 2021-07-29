import React from "react";
import "./Dashboard.css";
import PanelHeader from "../../components/PanelHeader/PanelHeader.js";
import CreateAdminAccount from "./CreateAdminAccount";
import DeleteAdminAccess from "./DeleteAdminAccess";
import { createContext } from "react";
import { useState } from "react";

export const loadingContext=createContext()
function Dashboard() {

const [adminReload, setAdminReload]=useState(false)


  return (
    <loadingContext.Provider value={{adminReload, setAdminReload}}>
      <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Dashboard</h2>
          </div>
        }
      />
      <div className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="card p-3">
              <h3 className=" text-center">
                H! Reyad Abedin Welcome to Admin Deshboard
              </h3>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <div className="card p-4 my-4">
              <CreateAdminAccount />
            </div>
          </div>

          <div className="col-md-6">
            <div className="card p-4 my-4">
              <DeleteAdminAccess />
            </div>
          </div>
        </div>
      </div>
    </loadingContext.Provider>
  );
}

export default Dashboard;
