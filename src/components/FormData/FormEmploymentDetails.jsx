import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ScrollToTopOnMount from "../../common/ScrollToMount";

export class FormEmploymentDetails extends Component {
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
      <div className="container" style={{ marginBottom: "28px" }}>
        <ScrollToTopOnMount />
        <h3>Stage 3- Employement Details</h3>
        <br />

        <div className="row">
          <div className="col-md-6">
            <p className="required">Employment Status</p>
          </div>
          <div className="col-md-6">
            <select
              name="employmentStatus"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="In paid employment (or self employed)">
                In paid employment (or self employed)
              </option>
              <option value="Not in paid employment, looking for work">
                Not in paid employment, looking for work
              </option>
              <option value="Employed but on less than £17,004 per year">
                Employed but on less than £17,004 per year
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              If employed, please select how many hours you work per week?
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="hoursPerWeek"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="0 to 10 hours per week">
                0 to 10 hours per week
              </option>
              <option value="11 to 20 hours per week">
                11 to 20 hours per week
              </option>
              <option value="21 to 30 hours per week">
                21 to 30 hours per week
              </option>
              <option value="30+ hours per week">30+ hours per week</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              If employed, please select length of employment (months)
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="employmentLength"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="Up to 3">Up to 3</option>
              <option value="4-6">4-6</option>
              <option value="7-12">7-12</option>
              <option value="12+">12+</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              If Employed, please enter the name of your Employer
            </p>
          </div>
          <div className="col-md-6">
            <input type="text" onChange={handleChange} name="employerName" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Employers address</p>
          </div>
          <div className="col-md-6">
            <input type="text" onChange={handleChange} name="employerAddress" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Employers Postcode</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="employerPostcode"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Employers Telephone Number</p>
          </div>
          <div className="col-md-6">
            <input type="text" onChange={handleChange} name="employerTelNo" />
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

export default FormEmploymentDetails;
