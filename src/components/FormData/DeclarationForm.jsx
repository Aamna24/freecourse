import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import ScrollToTopOnMount from "../../common/ScrollToMount";

export class DeclarationForm extends Component {
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
        <ScrollToTopOnMount />
        <h3>Step 6- Declaration</h3>
        <br />

        <p className="required">Contact Preferences</p>
        <div id="checkStmts">
          <input
            type="checkbox"
            name="contactPref"
            onChange={handleChange}
            value="Consent to Contact Preference"
          />
          <label>
            I consent to being contacted regarding my enrolment and course
          </label>
        </div>
        <br />

        <label className="required">Preferred Contact Method</label>
        <br />
        <input
          type="checkbox"
          name="contactMethodPref"
          onChange={handleChange}
          value="Phone"
        />
        <label>Phone</label>
        <br />
        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Email"
        />
        <label>Email</label>
        <br />
        <input
          type="checkbox"
          name="contactMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>Post</label>
        <br />

        <label className="required">Preferred Marketing Method</label>
        <br />
        <input
          type="checkbox"
          name="marketingMethodPref[0]"
          onChange={handleChange}
          value="Phone"
        />
        <label>Phone</label>
        <br />
        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Email"
        />
        <label>Email</label>
        <br />
        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>Text</label>
        <br />

        <p className="pBold">Declaration</p>
        <div id="checkStmts">
          <label>
            I confirm that the information provided in this application is
            correct and complete.
          </label>
        </div>

        <div id="checkStmts">
          <label>
            I agree to My Free Course processing the information provided in
            accordance with current Data Protection legislation.
          </label>
        </div>

        <div id="checkStmts">
          <label>
            I declare that I have correct and fully identified my prior
            qualifications.
          </label>
        </div>

        <div id="checkStmts">
          <label>
            I agree to make every effort to complete the course, and understand
            that by withdrawing from the course I may be required to pay £25
            administration fee.
          </label>
        </div>
        <br />
        <div id="checkStmts">
          <input
            type="checkbox"
            name="marketingMethodPref"
            onChange={handleChange}
            value="Text"
          />
          <label>I confirm and agree to above</label>
        </div>

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

export default DeclarationForm;
