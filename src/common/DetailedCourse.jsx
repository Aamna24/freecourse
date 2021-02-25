import React, { Image } from "react";

import { Container, Row, Col, Button } from "react-bootstrap";
import { Tabs, Tab, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { NavLink } from "react-router-dom";

const DetailedCourse = ({ product }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-8" style={{ color: "black" }}>
          <h2>{product.courseTitle}</h2>
          <br />
          <p>{product.courseDescription}</p>
          <br />
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Content">
              <p>{product.courseContent}</p>
            </Tab>
            <Tab eventKey="benefits" title="Benefits">
              <p>{product.courseBenefits}</p>
            </Tab>
          </Tabs>
        </div>
        <div class="col-md-4">
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Title>Key Information</Card.Title>
              <Table striped bordered>
                <thead>
                  <tbody>
                    <tr>
                      <td>Course Length</td>
                      <td>{product.courseLength}</td>
                    </tr>
                    <tr>
                      <td>Awarding Body</td>
                      <td>{product.awardingBody}</td>
                    </tr>
                    <tr>
                      <td>Course Level</td>
                      <td>{product.courseLevel}</td>
                    </tr>
                    <tr>
                      <td>Funding (subject to availibity)</td>
                      <td>{product.funding}</td>
                    </tr>
                    <tr>
                      <td>Laerning Method(s)</td>
                      <td>{product.learningMethods}</td>
                    </tr>
                  </tbody>
                </thead>
              </Table>
              <NavLink className="btn btn-primary " to="/form">
                Apply Now
              </NavLink>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourse;
