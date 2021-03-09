import React, { Component } from "react";
import Card from "react-bootstrap/Card";

const style = {
  width: "18rem",

  margin: "5px",
  marginBottom: "130px",
};

const Colleges = () => {
  return (
    <div className="container">
      <Card style={style}>
        <Card.Body>
          <Card.Title> West Notthingamshire College</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Total submitions: 7
          </Card.Subtitle>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Colleges;
