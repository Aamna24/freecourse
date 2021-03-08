import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ScrollToTop from "../../common/ScrollToMount";

export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div className="container">
        <ScrollToTop />
        <h3>Step 2- Personal Details</h3>
        <br />

        <div className="row">
          <div className="col-md-6">
            <p className="required">Title</p>
          </div>
          <div className="col-md-6">
            <select
              name="title"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Miss">Miss</option>
              <option value="Ms">Ms</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">First Name</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="firstName"
              placeholder="First Name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Last Name</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="lastName"
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Gender</p>
          </div>
          <div className="col-md-6">
            <select
              name="gender"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Date Of Birth</p>
          </div>
          <div className="col-md-6">
            <TextField
              id="date"
              name="dob"
              type="date"
              format="MM/dd/yyyy"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Address Line</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="addLine1"
              placeholder="Address Line"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Age</p>
          </div>
          <div className="col-md-6">
            <input type="number" onChange={handleChange} name="age" />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">City</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="city"
              placeholder="City"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <p className="required">County</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="county"
              placeholder="County"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Postcode</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="postcode"
              placeholder="Postcode"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Years at address</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="yearsAtAdd"
              placeholder="years at address"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Telephone</p>
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
              onChange={handleChange}
              name="telephone"
              placeholder="Telephone"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Mobile</p>
          </div>
          <div className="col-md-6">
            <input
              type="tel"
              onChange={handleChange}
              name="mobile"
              placeholder="Mobile"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Email</p>
          </div>
          <div className="col-md-6">
            <input
              type="email"
              onChange={handleChange}
              name="email"
              placeholder="email"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Emergency Contact Name</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="emergencyContactName"
              placeholder="emergency contact name"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Emergency Telephone</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="emergencyTelephone"
              placeholder="emergency telephone"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">Nationality</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="nationality"
              placeholder="Nationality"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">National Insurance Number</p>
          </div>
          <div className="col-md-6">
            <input
              type="text"
              onChange={handleChange}
              name="nationalInsNo"
              placeholder="NationalInsurance Number"
            />
          </div>
        </div>
        <Button color="secondary" variant="contained" onClick={this.back}>
          Back
        </Button>

        <Button color="primary" variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default FormPersonalDetails;
