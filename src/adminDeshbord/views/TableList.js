
import React from "react";

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

// core components
import PanelHeader from "../components/PanelHeader/PanelHeader.js";



function RegularTables() {
  return (
    <>
      <PanelHeader size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Table</h2>
           
          </div>
        }/>
      <div className="content">
        
      </div>
    </>
  );
}

export default RegularTables;
