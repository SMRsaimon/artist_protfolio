import React from "react";
import { Col, Row } from "reactstrap";
import PanelHeader from "../components/PanelHeader/PanelHeader.js";

function Notifications() {
  return (
    <>
      <PanelHeader
      size="sm"
        content={
          <div className="header text-center">
            <h2 className="title">Notifications</h2>
           
          </div>
        }
      />
      <div className="content">
        <Row>
          <Col md={6} xs={12}></Col>
          <Col md={6} xs={12}></Col>
        </Row>
      </div>
    </>
  );
}

export default Notifications;
