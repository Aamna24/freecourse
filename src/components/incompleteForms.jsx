import React, { Component } from "react";
import axios from "axios";
const IncompleteForms = () => {
  const [forms, setForms] = React.useState([]);

  const getData = () => {
    axios
      .get("http://localhost:61500/form/incompleteForms/")
      .then((res) => {
        setForms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //getData();
  React.useEffect(getData, []);
  console.log(forms.length);
  return (
    <div className="container">
      {forms.length == 0 ? (
        <p>There are no forms</p>
      ) : (
        <div>
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last lastName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Days Passed</th>
              </tr>
            </thead>
            <tbody>
              {forms.data.map((post) => {
                return (
                  <tr>
                    <td>{post.firstName}</td>
                    <td>{post.lastName}</td>
                    <td>{post.email}</td>
                    <td>{post.mobile}</td>
                    <td>{post.daysPassed}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default IncompleteForms;
