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
        <div className="col-md-4">
          <Card style={style}>
            <Card.Body>
              <Card.Title> Add Course</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Add Course
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/addCourse">Click here to Add Course</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-4 ">
          <Card style={style}>
            <Card.Body>
              <Card.Title>Students Listing</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="/studentslist">
                Click to view Students Data
              </Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>

        <div className="col-md-4">
          <Card style={style}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AdminLandingPage;
