import React, { Component, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormEmployementDetails from "./FormEmploymentDetails";
import FormEqualOppurtunities from "./EqualOppurtunities";
import DeclarationForm from "./DeclarationForm";
import FormQualification from "./FormQualification";
import FormExtended from "./FormExtended";
import Confirm from "./Confirm";
import Success from "./Success";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";

toast.configure();

export class UserForm extends Component {
  state = {
    step: 1,
    uniqueFormNo: "",
    appliedCourse: "",
    highestQualificationLevel: "",
    age19orOlder: "",
    residencyStatus: "",
    livingStatus: "",
    proof: "",
    title: "",
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    addLine1: "",
    age: "",
    city: "",
    county: "",
    postcode: "",
    yearsAtAdd: "",
    telephone: "",
    mobile: "",
    email: "",
    emergencyContactName: "",
    emergencyTelephone: "",
    nationality: "",
    nationalInsNo: "",
    employmentStatus: "",
    hoursPerWeek: "",
    employmentLength: "",
    employerName: "",
    employerAddress: "",
    employerPostcode: "",
    employersTelNo: "",
    unemployedLength: "",
    benefits: "",
    areYou: "",
    ethnicOrigin: "",
    firstLang: "",
    residentOfEngland: "",
    nonEEACitizen: "",
    householdSituation: [],
    criminalConvictions: "",
    mathsGrades: "",
    englishGrades: "",
    contactPref: "",
    contactMethodPref: [],
    marketingMethodPref: [],
    collegeName: ["West College", "North College"],
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // Handle fields change
  handleChange = (e) => {
    if (e.target.name === "email") {
      this.validateEmail(e.target.value);
    }
    if ([e.target.name] == "householdSituation") {
      let newArray = [...this.state.householdSituation, e.target.value];
      this.setState({
        [e.target.name]: newArray,
      });
    } else if ([e.target.name] == "contactMethodPref") {
      let newArray = [...this.state.contactMethodPref, e.target.value];

      this.setState({
        [e.target.name]: newArray,
      });
    } else if ([e.target.name] == "marketingMethodPref") {
      let newArray = [...this.state.marketingMethodPref, e.target.value];

      this.setState({
        [e.target.name]: newArray,
      });
    } else {
      this.setState({ [e.target.name]: e.target.value });
      console.log(e.target.value);
    }
  };
  handleDetails = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //validate email
  validateEmail(email) {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if (result === true) {
      this.setState({
        emailError: false,
        email: email,
      });
    } else {
      this.setState({
        emailError: true,
      });
    }
  }

  handleSubmitDetails = (e) => {
    if (
      this.state.highestQualificationLevel == "No- Level 3 or above" ||
      this.state.age19orOlder == "No" ||
      this.state.livingStatus == "No" ||
      this.state.proof == "No"
    ) {
      toast.error(
        "Unfortunately it doesn’t look like you qualify for one of our government funded courses"
      );
    } else {
      toast.success(
        "Congratulations, it looks like you qualify for one of our FREE government funded courses Places are limited, so please complete your application promptly. "
      );
    }
    const { lastName, firstName, email, mobile } = this.state;
    const details = {
      firstName,
      lastName,
      email,
      mobile,
    };

    axios
      .post(
        "https://consulting-backend.herokuapp.com/users/registerDetails",

        details
      )
      .then(() => toast.success("Form submitted successfully"))
      .catch((err) => {
        console.error(err);
        toast.error("User already registered");
      });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const {
      uniqueFormNo,
      appliedCourse,
      highestQualificationLevel,
      age19orOlder,
      residencyStatus,
      livingStatus,
      proof,
      title,
      firstName,
      lastName,
      gender,
      dob,
      addLine1,
      age,
      city,
      county,
      postcode,
      yearsAtAdd,
      telephone,
      mobile,
      email,
      emergencyContactName,
      emergencyTelephone,
      nationality,
      nationalInsNo,
      employmentStatus,
      hoursPerWeek,
      employmentLength,
      employerName,
      employerAddress,
      employerPostcode,
      employersTelNo,
      unemployedLength,
      benefits,
      areYou,
      ethnicOrigin,
      firstLang,
      residentOfEngland,
      nonEEACitizen,
      householdSituation,
      criminalConvictions,
      qualification,
      mathsGrades,
      englishGrades,
      contactPref,
      contactMethodPref,
      marketingMethodPref,
      collegeName,
      wheelchair,
      disabilities,
      disabilitiesValues,
    } = this.state;

    var randomIndex = Math.floor(Math.random() * collegeName.length);
    var randomElement = collegeName[randomIndex];

    const form = {
      uniqueFormNo,
      appliedCourse,
      highestQualificationLevel,
      age19orOlder,
      residencyStatus,
      livingStatus,
      proof,
      title,
      firstName,
      lastName,
      gender,
      dob,
      addLine1,
      age,
      city,
      county,
      postcode,
      yearsAtAdd,
      telephone,
      mobile,
      email,
      emergencyContactName,
      emergencyTelephone,
      nationality,
      nationalInsNo,
      employmentStatus,
      hoursPerWeek,
      employmentLength,
      employerName,
      employerAddress,
      employerPostcode,
      employersTelNo,
      unemployedLength,
      benefits,
      areYou,
      ethnicOrigin,
      firstLang,
      residentOfEngland,
      nonEEACitizen,
      householdSituation,
      criminalConvictions,
      qualification,
      mathsGrades,
      englishGrades,
      contactPref,
      contactMethodPref,
      marketingMethodPref,
      date: new Date(),
      collegeName: randomElement,
      wheelchair,
      disabilities,
      disabilitiesValues,
    };

    axios
      .post(
        "https://consulting-backend.herokuapp.com/form/submit",

        form
      )
      .then(() => toast.success("Form submitted successfully"))
      .catch((err) => {
        console.error(err);
        toast.error("Error submitting form.");
      });
  };

  render() {
    const { step, employmentStatus } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              handleDetails={this.handleDetails}
              handleSubmit={this.handleSubmitDetails}
              error={this.state.emailError}
            />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <FormPersonalDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 3:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <FormEmployementDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 4:
        if (
          employmentStatus === "Employed but on less than £17,004 per year" ||
          employmentStatus === "Not in paid employment, looking for work"
        ) {
          return (
            <div className="container">
              <ProgressBar now={(step / 6) * 100} id="pBar" />
              <br />
              <FormExtended
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
              <FormQualification
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
              />
            </div>
          );
        }
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <FormQualification
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 5:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <FormEqualOppurtunities
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 6:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} id="pBar" />
            <br />
            <DeclarationForm
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );

      case 7:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleSubmit={this.handleSubmit}
          />
        );
      case 8:
        return (
          <div>
            <Success />
          </div>
        );
      default:
        console.log("This is a multi-step form built with React.");
    }
  }
}

export default UserForm;
