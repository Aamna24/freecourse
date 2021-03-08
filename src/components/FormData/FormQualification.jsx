import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ScrollToTop from "../../common/ScrollToMount";

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
      <div className="container" style={{ marginBottom: "190px" }}>
        <ScrollToTop />
        <h3>Step 4- Qualification Details</h3>
        <br />

        <div className="row">
          <div className="col-md-6">
            <p className="required">
              What is your highest level of qualification?
            </p>
          </div>
          <div className="col-md-6">
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
              <option value="Entry Level">Entry Level</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Maths GCSE grades obtained:</p>
          </div>
          <div className="col-md-6">
            <input type="text" onChange={handleChange} name="mathsGrades" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">English GCSE Grades:</p>
          </div>
          <div className="col-md-6">
            <input type="text" onChange={handleChange} name="englishGrades" />
          </div>
        </div>
        <br></br>
        <Button
          color="primary"
          variant="contained"
          onClick={this.back}
          id="btns"
        >
          Back
        </Button>

        <Button
          color="primary"
          variant="contained"
          onClick={this.continue}
          id="btns"
        >
          Continue
        </Button>
      </div>
    );
  }
}

export default FormQualification;
