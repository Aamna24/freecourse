import React, { Component } from "react";
import { Card } from "react-bootstrap";
import Button from "@material-ui/core/Button";
import Bar from "./Reports";
import * as auth from "../services/authService";
import * as adminauth from "../services/adminService";
import { Link } from "react-router-dom";

const style = {
  width: "18rem",
  margin: "5px",
  marginBottom: "130px",
};

const AdminLandingPage = () => {
  const [forms, setForms] = React.useState([]);
  const [incForms, setIncForms] = React.useState([]);
  const [college, setCollege] = React.useState();

  const getData = () => {
    auth
      .getForm()
      .then((res) => {
        setForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);

  const getCollegeData = () => {
    adminauth
      .getCollegeCount()
      .then((res) => {
        setCollege(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getCollegeData, []);

  const getIncData = () => {
    auth
      .getIncompleteForms()
      .then((res) => {
        setIncForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  React.useEffect(getIncData, []);

  if (!forms || forms.length === 0)
    return <p>We are waiting for the data to load</p>;
  if (!incForms || incForms.length === 0)
    return <p>We are waiting for the data to load</p>;
  if (!college || college.length === 0)
    return <p>We are waiting for the data to load</p>;

  return (
    <div className="container">
      <h3 className="text-center">Welcome Admin!</h3>
      <br />
      <br />
      <Button component={Link} to="/addcourse" className="mb-5" color="primary">
        Add Course
      </Button>
      <br />
      <div className="row">
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title> Colleges</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                View submitions of each college
              </Card.Subtitle>
              <Card.Text>
                Total Number of Active College: {college.data.length}
              </Card.Text>
              <Card.Link href="/colleges">Click here to View data</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title> Incomplete Applications</Card.Title>
              <br />

              <Card.Subtitle className="mb-2 text-muted">
                Count: {incForms.data.length}
              </Card.Subtitle>

              <br />
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
                View List of Students who have submitted their form
              </Card.Subtitle>
              <Card.Text>Total Forms: {forms.data.length}</Card.Text>
              <Card.Link href="/studentslist">
                Click to view Students Data
              </Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
      <Bar data={forms.data} />
    </div>
  );
};

export default AdminLandingPage;
