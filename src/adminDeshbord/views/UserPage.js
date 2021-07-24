
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "../components/PanelHeader/PanelHeader";

// core components


function User() {
  return (
    <>
      <PanelHeader size="sm"
        content={
          <div className="header  text-center">
            <h2 className="title">Table</h2>
           
          </div>
        }
          />
     
    </>
  );
}

export default User;
