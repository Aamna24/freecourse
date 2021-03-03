import React, { Component } from "react";
import Button from "@material-ui/core/Button";

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
        <h3>Step 6- Declaration</h3>
        <br />

        <p className="required">Contact Preferences</p>
        <input
          type="checkbox"
          name="contactPref"
          onChange={handleChange}
          value="Consent to Contact Preference"
        />
        <label>
          I consent to being contacted regarding my enrolment and course
        </label>
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

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I confirm that the information provided in this application is correct
          and complete.
        </label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I agree to My Free Course processing the information provided in
          accordance with current Data Protection legislation.
        </label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I agree that I will inform My Free Course if any information supplied
          in my application changes in any way.
        </label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I declare that I have correct and fully identified my prior
          qualifications.
        </label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I agree to abide by My Free Course policies and procedures.
        </label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>
          I agree to make every effort to complete the course, and understand
          that by withdrawing from the course I may be required to pay £100
          administration fee.
        </label>
        <br />

        <p className="pBold">Enrollment Call Availabilty</p>

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>Weekday Mornings</label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>Weekday afternoons</label>
        <br />

        <input
          type="checkbox"
          name="marketingMethodPref"
          onChange={handleChange}
          value="Text"
        />
        <label>Weekday evenings</label>
        <br />

        <p>
          You will be contacted shortly after completing your online
          registration to arrange an enrolment call - as availability is limited
          due to the number of applicants please confirm when would most be
          appropriate.
        </p>
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

export default DeclarationForm;
