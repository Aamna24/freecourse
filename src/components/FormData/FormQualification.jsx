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
              className="w-auto"
            >
              <option value="None">None</option>
              <option value="Entry Level">
                Entry Level - (e.g. Basic/Foundation Level, Word Power or Number
                Power, GCF Entry Level Award/Certificate)
              </option>
              <option value="Level 1">
                Level 1 - (e.g. GSCE(5 or more grades D-G or fewer than 5 grades
                A*-C), AS Level, CSE below grade 1, GNVQ Foundation, QCF Level 1
                Award/Certificate/ Diploma or NVQ 1)
              </option>
              <option value="Level 2">
                Level 2 (e.g. 5 or more GCSE/O Levels at grades A* - C, 1 A
                Level, 2/3 AS Levels, 5 or more CSE grade 1’s, GNVQ
                Intermediate, QCF Diploma Level 2)
              </option>
              <option value="Level 3">
                Level 3 - (e.g. 4 or more AS Levels, 2 or more A Levels, BTEC
                Diploma, BTEC Extended Diplomas, QAA Access to Higher Education,
                QCF Diplomas Level 3)
              </option>
              <option value="Level 4">
                Level 4 - (e.g. Higher National Certificate (HNC), QCF Level 4
                Award/Certificate/Diploma or NVQ Level 4)
              </option>
              <option value="Level 5">
                Level 5 - (e.g. Foundation Degree, Higher National Diploma (HND)
                or QCF Level 5 Award/Certificate/Diploma)
              </option>
              <option value="Level 6">
                Level 6 - (e.g. Bachelors Degree, Professional Graduate
                Certificate in Education (PGCE) or QCF Level 6
                Award/Certificate/Diploma)
              </option>
              <option value="Level 7">Level 7+</option>
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
