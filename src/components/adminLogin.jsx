import React, { Component } from "react";
import Form from "../common/form";
import Joi from "joi-browser";
import auth from "../services/adminService";

class AdminPanel extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.adminlogin(data.username, data.password);
      window.location = "/adminhome";
    } catch (ex) {
      if (ex.response && ex.respone.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div
        class="col-xl-3 col-lg-6 col-md-8 col-sm-10 mx-auto text-center form p-4"
        style={{ marginBottom: "135px" }}
      >
        <h1>Admin Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default AdminPanel;
