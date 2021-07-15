import React from "react";
import Sidebar from "../Navigation/Sidebar";
import "./Contract.css";
import ContractForm from "./ContractForm";
import ContractInfo from "./ContractInfo";

const Contract = () => {
  return (
    <div id="contract">
      <Sidebar />
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
          <ContractInfo/>
          </div>
          <div className="col-lg-10 offset-lg-1">
            <ContractForm />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Contract;
