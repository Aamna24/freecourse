import React, { Component } from "react";
import Card from "react-bootstrap/Card";

const style = {
  width: "18rem",

  margin: "5px",
  marginBottom: "130px",
};
const AdminLandingPage = () => {
  return (
    <div className="container">
      <h3 className="text-center">Welcome Admin!</h3>
      <br />
      <br />
      <div className="row">
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title> Colleges</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                View submitions of each college
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="/colleges">Click here to View data</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title> Incomplete Forms</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                View list of students with incomplete form
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="/incompleteForms">
                Click here to View List
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title>Students Listing</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                View tabular data
              </Card.Subtitle>
              <Card.Text></Card.Text>
              <Card.Link href="/studentslist">
                Click to view Students Data
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
