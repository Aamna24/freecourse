import React, { Component } from "react";
import Table from "react-bootstrap/Table";
const StudentFormData = ({ product }) => {
  return (
    <div className="container" style={{ marginTop: "50px", color: "black" }}>
      <Table striped bordered>
        <tbody>
          <tr>
            <td>First Name</td>
            <td>{product.personalDetails.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td>
            <td>{product.personalDetails.lastName}</td>
          </tr>
          <tr>
            <td>Applied Course</td>
            <td>{product.detailsFormData.appliedCourse}</td>
          </tr>
          <tr>
            <td>Highest Qualification Level</td>
            <td>{product.qualificationDetails.level}</td>
          </tr>
          <tr>
            <td>Are you age 19?</td>
            <td>{product.detailsFormData.age19orOlder}</td>
          </tr>

          <tr>
            <td>Title</td>
            <td>{product.personalDetails.title}</td>
          </tr>
          <tr>
            <td>Gender</td>
            <td>{product.personalDetails.gender}</td>
          </tr>
          <tr>
            <td>Date Of Birth</td>
            <td>{product.personalDetails.dob}</td>
          </tr>
          <tr>
            <td>Address Line</td>
            <td>{product.personalDetails.addLine1}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{product.personalDetails.age}</td>
          </tr>
          <tr>
            <td>City</td>
            <td>{product.personalDetails.city}</td>
          </tr>
          <tr>
            <td>County</td>
            <td>{product.personalDetails.county}</td>
          </tr>
          <tr>
            <td>Postcode</td>
            <td>{product.personalDetails.postcode}</td>
          </tr>
          <tr>
            <td>Telephone</td>
            <td>{product.personalDetails.telephone}</td>
          </tr>
          <tr>
            <td>Mobile</td>
            <td>{product.personalDetails.mobile}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{product.personalDetails.email}</td>
          </tr>
          <tr>
            <td>Emergency Contact Name</td>
            <td>{product.personalDetails.emergencyContactName}</td>
          </tr>
          <tr>
            <td>Emergency Contact Number</td>
            <td>{product.personalDetails.emergencyTelephone}</td>
          </tr>
          <tr>
            <td>Nationality</td>
            <td>{product.personalDetails.nationality}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default StudentFormData;
