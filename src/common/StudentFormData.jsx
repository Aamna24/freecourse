import React, { Component } from "react";
import Table from "react-bootstrap/Table";
const StudentFormData = ({ product }) => {
  return (
    <div className="container" style={{ marginTop: "50px", color: "black" }}>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{product.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{product.lastName}</td>
          </tr>
          <tr>
            <td>Applied Course</td>
            <td>{product.appliedCourse}</td>
          </tr>
          <tr>
            <td>Highest Qualification Level</td>
            <td>{product.highestQualificationLevel}</td>
          </tr>
          <tr>
            <td>Are you age 19?</td>
            <td>{product.age19orOlder}</td>
          </tr>
          <tr>
            <td>Residency status</td>
            <td>{product.residencyStatus}</td>
          </tr>
          <tr>
            <td>Living Status</td>
            <td>{product.livingStatus}</td>
          </tr>
          <tr>
            <td>Title</td>
            <td>{product.title}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{product.gender}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td>{product.dob.slice(0, 10)}</td>
          </tr>
          <tr>
            <td>Address Line</td>
            <td>{product.addLine1}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{product.age}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{product.city}</td>
          </tr>
          <tr>
            <td>County</td>
            <td>{product.county}</td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{product.postcode}</td>
          </tr>
          <tr>
            <td>Telephone</td>
            <td>{product.telephone}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{product.mobile}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{product.email}</td>
          </tr>
          <tr>
            <td>Emergency Contact Name</td>
            <td>{product.emergencyContactName}</td>
          </tr>
          <tr>
            <td>Emergency Contact Number</td>
            <td>{product.emergencyTelephone}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{product.nationality}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StudentFormData;
