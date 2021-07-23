import React from "react";
import "./Dashboard.css";

import { Row, Col } from "reactstrap";

import PanelHeader from "../components/PanelHeader/PanelHeader.js";

function Dashboard() {
  return (
    <>
      <PanelHeader
        size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Dashboard</h2>
          </div>
        }
      />
      <div className="content">
        <Row>
          <Col xs={12} md={12}>
           <div className="card p-3">
           <h3 className=" text-center">
              H! Reyad Abedin Welcome to Admin Deshboard
            </h3>

           </div>
            
          </Col>
          <Col xs={12} md={4}></Col>
          <Col xs={12} md={4}></Col>
        </Row>
        <Row>
          <Col xs={12} md={6}></Col>
          <Col xs={12} md={6}></Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
