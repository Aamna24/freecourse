import React, { Component } from "react";

class FormExtended extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <div className="container">
        <br />
        <h3>Stage 3.5- UNEMPLOYED/LOW INCOME</h3>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              If Unemployed, please select how long you have been unemployed:
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="unemployedLength"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="0-5 months">0-5 months</option>
              <option value="6-11 months">6-11 months</option>
              <option value="12-23 months">12-23 months</option>
              <option value="24-35 months">24-35 months</option>
              <option value="Over 36 months">Over 36 months</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Are you in recipe of benefits?</p>
          </div>
          <div className="col-md-6">
            <select
              name="benefits"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please select one]</option>
              <option value="JSA">JSA</option>
              <option value="Income Support">Income Support</option>
              <option value="Council Tax Benefit">Council Tax Benefit</option>
              <option value="ESA (Any)">ESA (Any)</option>
              <option value="Incapacity benefit">Incapacity benefit</option>
              <option value="Housing Benefit">Housing Benefit</option>
              <option value="Universal Credit">Universal Credit</option>
              <option value="Employed but on less than £17,004 per year">
                Employed but on less than £17,004 per year
              </option>
            </select>
          </div>
        </div>

        <input
          type="checkbox"
          name="areYou"
          onChange={handleChange}
          value="true"
        />
        <label className="required">
          19-23 (on the first day of learning)and enrolling onto qualifications
          up to and including Level 2?
        </label>
        <br />
      </div>
    );
  }
}

export default FormExtended;
