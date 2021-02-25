import React, { Component, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
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

export class UserForm extends Component {
  state = {
    step: 1,
    appliedCourse: "",
    highestQualificationLevel: "",
    age19orOlder: "",
    residencyStatus: "",
    livingStatus: "",
    ageProof: "",
    livingAndWorkingProof: "",
    homeAddProof: "",
    employmentProof: "",
    declarationStmt1: "",
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
    trimmedDataURL: "",
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

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      appliedCourse,
      highestQualificationLevel,
      age19orOlder,
      residencyStatus,
      livingStatus,
      ageProof,
      livingAndWorkingProof,
      homeAddProof,
      employmentProof,
      declarationStmt1,
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
      trimmedDataURL,
    } = this.state;

    const form = {
      appliedCourse,
      highestQualificationLevel,
      age19orOlder,
      residencyStatus,
      livingStatus,
      ageProof,
      livingAndWorkingProof,
      homeAddProof,
      employmentProof,
      declarationStmt1,
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
      trimmedDataURL,
    };

    axios
      .post("http://localhost:61500/form/submit", form)
      .then(() => console.log("Form Submitted"))
      .catch((err) => {
        console.error(err);
      });
  };

  render() {
    const { step, employmentStatus } = this.state;

    switch (step) {
      case 1:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} />
            <br />
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 2:
        return (
          <div className="container">
            <ProgressBar now={(step / 6) * 100} />
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
            <ProgressBar now={(step / 6) * 100} />
            <br />
            <FormEmployementDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
            />
          </div>
        );
      case 4:
        if (employmentStatus === "Employed but on less than £17,004 per year") {
          return (
            <div className="container">
              <ProgressBar now={(step / 6) * 100} />
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
            <ProgressBar now={(step / 6) * 100} />
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
            <ProgressBar now={(step / 6) * 100} />
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
            <ProgressBar now={(step / 6) * 100} />
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
            saveURL={this.saveURL}
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
