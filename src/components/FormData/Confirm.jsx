import React, { Component, useRef } from "react";
import Button from "@material-ui/core/Button";
import SignaturePad from "react-signature-canvas";
import { toast } from "react-toastify";
import Popup from "reactjs-popup";
import * as SignatureService from "../../services/userServices";
import ScrollToTopOnMount from "../../common/ScrollToMount";

toast.configure();

export class Confirm extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    trimmedDataURL: null,
    nationalInsNo: "",
  };

  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  sigPad = {};

  clearSig = () => {
    this.sigPad.clear();
    console.log("on click:", this.state.trimmedDataURL);
  };

  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas().toDataURL("image/png"),
    });
  };

  render() {
    let { trimmedDataURL, nationalInsNo } = this.state;

    const { handleSubmit } = this.props;
    return (
      <div className="container text-center" style={{ marginBottom: "150px" }}>
        <ScrollToTopOnMount />
        <h1>Confirm Submission? </h1>
        <br />
        <br />
        <Popup
          modal
          trigger={
            <button className="btn btn-success">Click to add signature</button>
          }
        >
          <SignaturePad
            id="canvas"
            penColor="green"
            ref={(ref) => {
              this.sigPad = ref;
            }}
            canvasProps={{
              width: 500,
              height: 200,
              className: "sigCanvas",
            }}
          />
          <div className="row">
            <div className="col-md">
              <label>Please enter your insurance number</label>
              <input
                type="text"
                name="nationalInsuranceNo"
                onChange={(e) => {
                  this.setState({
                    nationalInsNo: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ">
              <button
                className="btn btn-success"
                onClick={this.clearSig}
                id="sigBtn"
              >
                Clear
              </button>
            </div>
            <div className="col-md-4 ">
              <button
                className="btn btn-success"
                name="trimmedDataURL"
                id="sigBtn"
                onClick={this.trim}
              >
                Save A
              </button>
            </div>
            <div className="col-md-4 ">
              <button
                className="btn btn-success"
                id="sigBtn"
                name="trimmedDataURL"
                onClick={(e) => {
                  console.log("in click", trimmedDataURL);
                  SignatureService.submitSigns({
                    trimmedDataURL,
                    nationalInsNo,
                  })
                    .then((data) => {
                      console.log(data);
                      toast.success("Successfully Added", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    })
                    .catch((err) => {
                      console.log(err);
                      toast.error("Fail", {
                        position: toast.POSITION.TOP_CENTER,
                      });
                    });
                }}
              >
                Save Signature
              </button>
            </div>
          </div>
          {trimmedDataURL ? <img src={trimmedDataURL} /> : null}
          <br /> <br />
        </Popup>
        <br /> <br />
        <div className="row" style={{ paddingLeft: "43%" }}>
          <Button
            color="primary"
            variant="contained"
            onClick={this.back}
            style={{ margin: "5px" }}
          >
            Back
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={handleSubmit}
            style={{ margin: "5px" }}
          >
            Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default Confirm;
