import React, { useState, Component } from "react";
import Joi from "joi-browser";
import Form from "../common/form";
import * as AdminService from "../services/adminService";

class AddCourse extends Form {
  state = {
    data: {
      courseTitle: "",
      courseDescription: "",
      courseContent: "",
      courseBenefits: "",
      courseLength: "",
      awardingBody: "",
      courseLevel: "",
      funding: "",
      learningMethods: "",
    },
    errors: {},
  };

  schema = {
    courseTitle: Joi.string().required().label("Title"),
    courseDescription: Joi.string().required().label("Description"),
    courseContent: Joi.string().required().label("Content"),
    courseBenefits: Joi.string().required().label("Benefits"),
    courseLength: Joi.string().required().label("Length"),
    awardingBody: Joi.string().required().label("Awarding Body"),
    courseLevel: Joi.string().required().label("Course Level"),
    funding: Joi.string().required().label("Funding"),
    learningMethods: Joi.string().required().label("Learning Methods"),
  };

  doSubmit = async () => {
    try {
      const responses = await AdminService.addCourse(this.state.data);

      console.log(responses);
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
      <div className=" mx-auto text-left form p-4 container">
        <h1 style={{ marginBottom: "37px" }}>Add Course</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("courseTitle", "title")}
          {this.renderTextField("courseDescription", "Description")}
          {this.renderTextField("courseContent", "Content")}
          {this.renderTextField("courseBenefits", "Benefits")}
          {this.renderInput("courseLength", "courseLength")}
          {this.renderInput("awardingBody", "AwardingBody")}
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
