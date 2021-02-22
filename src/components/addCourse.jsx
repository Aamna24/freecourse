import React, { useState, Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as AdminService from "../services/adminService";

class AddCourse extends Form {
  state = {
    data: {
      title: "",
      description: "",
      content: "",
      benefits: "",
      courseLength: "",
      awardingBody: "",
      courseLevel: "",
      funding: "",
      learningMethods: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    description: Joi.string().required().label("Description"),
    content: Joi.string().required().label("Content"),
    benefits: Joi.string().required().label("benefits"),
    courseLength: Joi.string().required().label("length"),
    awardingBody: Joi.string().required().label("awardingBody"),
    courseLevel: Joi.string().required().label("courseLevel"),
    funding: Joi.string().required().label("funding"),
    learningMethods: Joi.string().required().label("learningMethods"),
  };

  doSubmit = async () => {
    try {
      const response = await AdminService.addCourse(this.state.data);
      console.log(response);
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
        console.log(errors);
      }
    }
  };

  render() {
    return (
      <div class=" mx-auto text-left form p-4 container">
        <h1 style={{ marginBottom: "37px" }}>Add Course</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderTextField("description", "Description")}
          {this.renderTextField("content", "Content")}
          {this.renderTextField("benefits", "Benefits")}
          {this.renderInput("courseLength", "courseLength")}
          {this.renderInput("awardingBody", "Title")}
          {this.renderInput("courseLevel", "courseLevel")}
          {this.renderInput("funding", "funding")}
          {this.renderInput("learningMethods", "learningMethods")}
          {this.renderButton("Add Course")}
        </form>
      </div>
    );
  }
}

export default AddCourse;
