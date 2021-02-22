import React, { Component } from "react";
import Button from "@material-ui/core/Button";

export class FormUserDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div class="container">
        <h3>Step 1- Eligibility Check</h3>
        <br />
        <p>
          The courses provided are delivered online by UK colleges and are
          fully-funded by UK government at no cost to you.
        </p>
        <p>
          To see if you qualify for a FREE funded nationally recognised course,
          please answer the following questions.
        </p>

        <div class="row">
          <div class="col-md-6">
            <p class="required">1- Which course are you applying for?*</p>
          </div>
          <div class="col-md-6">
            <select
              name="appliedCourse"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please Select One]</option>
              <option value="Awareness of Mental Health">
                Awareness of Mental Health
              </option>
              <option value="Children and Young's People Mental Health">
                Children and Young's People Mental Health
              </option>
              <option value="Customer and Service">Customer and Service</option>
              <option value="Equality and Diversity">
                Equality and Diversity
              </option>
              <option value="Caring for the Elderly">
                Caring for the Elderly
              </option>
              <option value="Behavior that challenges in Children">
                Behavior that challenges in Children
              </option>
              <option value="Preparing to work in Adult Social Care">
                Preparing to work in Adult Social Care
              </option>
              <option value="Individuals with learning disabilities">
                Individuals with learning disabilities
              </option>
              <option value="Bullying in Children and Young Children">
                Bullying in Children and Young Children
              </option>
              <option value="Learn Organization Managemnt Techniques">
                Learn Organization Managemnt Techniques
              </option>
              <option value="Principles of Warehousing">
                Principles of Warehousing
              </option>
              <option value="IT User Skills">IT User Skills</option>
              <option value="Understanding Retail Operations">
                Understanding Retail Operations
              </option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Behavior that Challenges in Children">
                Behavior that Challenges in Children
              </option>
              <option value="Information, Advice and Guidance">
                Information, Advice and Guidance
              </option>
              <option value="Understanding Autism">Understanding Autism</option>
              <option value="Dignity and safeguarding and adult safeguarding">
                Dignity and safeguarding and adult safeguarding
              </option>
              <option value="Retail operations">Retail operations</option>
              <option value="Digital skills in employment">
                Digital skills in employment
              </option>
              <option value="End Of Life Care">End Of Life Care</option>
              <option value="Principles of Team Leading">
                Principles of Team Leading
              </option>
              <option value="Principles of Dementia Care">
                Principles of Dementia Care
              </option>
              <option value="Falls Prevention Awareness">
                Falls Prevention Awareness
              </option>
            </select>
          </div>
        </div>
        <p>
          *If you want to do more than one course please choose your first
          choice course in this section. During your enrolment call you can
          confirm any additional courses you would like to complete.
        </p>
        <div class="row">
          <div class="col-md-6">
            <p class="required">
              2- Please confirm that the highest qualification you hold for this
              course is Level 2 or lower*
            </p>
          </div>
          <div class="col-md-6">
            <select
              name="highestQualificationLevel"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please Select One]</option>
              <option value="Yes- Level 2 or below">
                Yes- Level 2 or below
              </option>
              <option value="No- Level 3 or above">No- Level 3 or above</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="required">3- Are you age 19 or older?</p>
          </div>
          <div class="col-md-6">
            <select
              name="age19orOlder"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please Select One]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <p class="required">4- What is your residency status?</p>
          </div>
          <div class="col-md-6">
            <select
              name="residencyStatus"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please Select One]</option>
              <option value="British Citizen">British Citizen</option>
              <option value="Citizen of a Country within the EEA">
                Citizen of a Country within the EEA
              </option>
              <option value="Non-EU Citizen with indefinite leave to remain">
                Non-EU Citizen with indefinite leave to remain
              </option>
              <option value="Non-EU Citizen with Discretionary leave to remain">
                Non-EU Citizen with Discretionary leave to remain
              </option>
              <option value="Non-EU Citizen with Exceptional leave to remain">
                Non-EU Citizen with Exceptional leave to remain
              </option>
              <option value="Non-EU Citizen with indefinite leave to remain">
                Non-EU Citizen with indefinite leave to remain
              </option>
              <option value="Refugee Status">Refugee Status</option>
              <option value="Asylum Seeker">Asylum Seeker</option>
              <option value="Husband, Wife, Civil Partner or Child of an eligible person">
                Husband, Wife, Civil Partner or Child of an eligible person
              </option>
              <option value="Other (details and evidence in learner file)">
                Other (details and evidence in learner file)
              </option>
            </select>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6">
            <p class="required">
              5- Have you lived in UK or EU for the past 3 years?
            </p>
          </div>
          <div class="col-md-6">
            <select
              name="livingStatus"
              defaultValue="[Please select one]"
              onChange={handleChange}
            >
              <option value="">[Please Select One]</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>
        <br />
        <p>
          We work with a range of education providers to help you access fully
          funded UK government courses that lead to a nationally recognised
          qualification. Before enrolling onto your chosen course the education
          provider will need to confirm you meet the required qualification
          criteria for full funding. This is usually on the form of copies of
          original documents.
        </p>

        <p>Please confirm that you are able to provide the following:</p>
        <input
          type="checkbox"
          name="ageProof"
          onChange={handleChange}
          value="Age proof"
        />
        <label class="required">Age Proof</label>
        <br />
        <input
          type="checkbox"
          name="livingAndWorkingProof"
          onChange={handleChange}
          value="living And Working Proof"
        />
        <label class="required">
          Proof of your right to live and work in the UK*
        </label>
        <br />
        <input
          type="checkbox"
          name="homeAddProof"
          onChange={handleChange}
          value="Home Address Proof"
        />
        <label class="required">Proof of your home address*</label>
        <br />
        <input
          type="checkbox"
          name="employmentProof"
          onChange={handleChange}
          value="Employment proof"
        />
        <label class="required">
          Proof of your employment or benefit status
        </label>
        <br />
        <br />

        <input
          type="checkbox"
          name="declarationStmt1"
          onChange={handleChange}
          value="true"
        />
        <label class="required">
          I understand that the course is provided at no cost to myself, and
          agree to make every effort to complete the course
        </label>
        <br />
        <Button color="primary" variant="contained" onClick={this.continue}>
          Continue
        </Button>
      </div>
    );
  }
}

export default FormUserDetails;
