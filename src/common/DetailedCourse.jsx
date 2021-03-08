import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Card, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailedCourse = ({ product }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Benefits = (props) => {
    const text = props.text;

    const newText = text.split(/(?=[A-Z])/).map((str) => (
      <ul>
        <li>{str}</li>
      </ul>
    ));
    return newText;
  };

  const Content = (props) => {
    const text = props.text;

    const newText = text.split("Unit").map((str) => (
      <p>
        <b>Unit</b>
        {str}
      </p>
    ));
    return newText;
  };
  return (
    <div className="container" xs={12} style={{ "margin-top": "-100px" }}>
      <div className="row">
        <div className="col-md-8" style={{ color: "black" }}>
          <div class="row">
            <div class="col-md-2">
              <img src={product.img} />
            </div>
            <div class="col-md-10">
              <h2>{product.courseTitle}</h2>
            </div>
          </div>

          <br />
          <p>{product.courseDescription}</p>
          <br />
          <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Content">
              <Content text={product.courseContent} />
            </Tab>
            <Tab eventKey="benefits" title="Benefits">
              <p>The benefits of this course includes:</p>
              <Benefits text={product.courseBenefits} />
            </Tab>
          </Tabs>
        </div>
        <div className="col-md-4">
          <Card style={{ width: "18rem", color: "black" }}>
            <Card.Body>
              <Card.Title>KEY INFORMATION</Card.Title>
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
              <Link className="btn btn-primary " to="/form">
                Apply Now
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailedCourse;
