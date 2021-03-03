import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class FormEqualOppurtunities extends Component {
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
        <h3>Step 5- Equal Oppurtunities</h3>
        <br />

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">What is your ethnic origin?</p>
          </div>
          <div className="col-md-6">
            <select
              name="ethnicOrigin"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="English/Welsh/Scottish/Northern Irish/British">
                English/Welsh/Scottish/Northern Irish/British
              </option>
              <option value="Irish">Irish</option>
              <option value="Gypsy or Irish traveller">
                Gypsy or Irish traveller
              </option>
              <option value="Any other white background">
                Any other white background
              </option>
              <option value="White and Black Carribean">
                White and Black Carribean
              </option>
              <option value="White and Black African">
                White and Black African
              </option>
              <option value="White and Asian">White and Asian</option>
              <option value="Any other mixed/multiple ethnic background">
                Any other mixed/multiple ethnic background
              </option>
              <option value="Indian">Indian</option>
              <option value="Pakistani">Pakistani</option>
              <option value="Bangladeshi">Bangladeshi</option>
              <option value="Chinese">Chinese</option>
              <option value="Any other Asian background">
                Any other Asian background
              </option>
              <option value="African">African</option>
              <option value="Caribbean">Caribbean</option>
              <option value="Any other Black/African/Caribbean">
                Any other Black/African/Caribbean
              </option>
              <option value="Arab">Arab</option>
              <option value="Any other ethnic group">
                Any other ethnic group
              </option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">Is english your first language?</p>
          </div>
          <div className="col-md-6">
            <select
              name="firstLang"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              Have you been resident in England, or elsewhere in the European
              Economic Area, for at least three years, excluding Wales,
              Scotland, and Northern Ireland?
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="residentOfEngland"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              I am a non EEA citizen with permission from the UK government to
              live in the UK
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="nonEEACitizen"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="pBold">
              What is your current household situation? (one or more may apply)
            </p>
          </div>
          <div className="col-md-6">
            <input
              type="checkbox"
              name="householdSituation"
              onChange={handleChange}
              value="No household member is in employment and the household includes
              one or more dependent children."
            />
            <label className="required">
              No household member is in employment and the household includes
              one or more dependent children.
            </label>
            <br />

            <input
              type="checkbox"
              name="householdSituation"
              onChange={handleChange}
              value="true"
            />
            <label className="required">
              No household member is in employment and the household does not
              include any dependent children.
            </label>
            <br />

            <input
              type="checkbox"
              name="householdSituation"
              onChange={handleChange}
              value="true"
            />
            <label className="required">
              Learner lives in a single adult household with dependent children.
            </label>
            <br />
            <input
              type="checkbox"
              name="householdSituation"
              onChange={handleChange}
              value="true"
            />
            <label className="required">None of these statement apply</label>
            <br />
            <input
              type="checkbox"
              name="householdSituation"
              onChange={handleChange}
              value="true"
            />
            <label className="required">
              I can confirm that I wish to withhold this information
            </label>
            <br />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p className="required">
              Do you have any criminal convictions, cautions or pending
              prosecutions?
            </p>
          </div>
          <div className="col-md-6">
            <select
              name="criminalConvictions"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="[Please select one]">[Please select one]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
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

export default FormEqualOppurtunities;
