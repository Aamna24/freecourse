import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class FormQualification extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange } = this.props;
    return (
      <div class="container">
        <h3>Step 4- Qualification Details</h3>
        <br />

        <div class="row">
          <div class="col-md-6">
            <p class="required">What is your highest level of qualification?</p>
          </div>
          <div class="col-md-6">
            <select
              name="qualification"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="None">None</option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
              <option value="Level 3">Level 3</option>
              <option value="Level 4">Level 4</option>
              <option value="Level 5">Level 5</option>
              <option value="Level 6">Level 6</option>
              <option value="Level 7">Level 7</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <p class="pBold">Maths GCSE grades obtained:</p>
          </div>
          <div class="col-md-6">
            <input type="text" onChange={handleChange} name="mathsGrades" />
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <p class="pBold">English GCSE Grades:</p>
          </div>
          <div class="col-md-6">
            <input type="text" onChange={handleChange} name="englishGrades" />
          </div>
        </div>

        <Button color="primary" variant="contained" onClick={this.back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default FormQualification;
