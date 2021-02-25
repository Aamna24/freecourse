import React, { Component, useRef } from "react";
import Button from "@material-ui/core/Button";
import SignaturePad from "react-signature-canvas";

export class Confirm extends Component {
  constructor(props) {
    super(props);
  }
  state = { trimmedDataURL: null };

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
    console.log("prop", this.props.trimmedDataURL);
  };

  render() {
    let { trimmedDataURL } = this.state;

    const { values, handleSubmit, saveURL } = this.props;
    return (
      <div class="container text-center">
        <h1>Confirm Submission? </h1>
        <br />
        <br />
        <SignaturePad
          id="canvas"
          penColor="green"
          ref={(ref) => {
            this.sigPad = ref;
          }}
          canvasProps={{
            width: 500,
            height: 200,
            backgroundColor: "yellow",
            className: "sigCanvas",
          }}
        />
        <div class="row">
          <div class="col-md-6 text-right">
            <button className="btn btn-success" onClick={this.clearSig}>
              Clear
            </button>
          </div>
          <div class="col-md-6 text-left">
            <button className="btn btn-success" onClick={this.trim}>
              Trim
            </button>
          </div>
        </div>
        <br />
        {trimmedDataURL ? <img src={trimmedDataURL} /> : null}
        <button>Save</button>
        <br /> <br />
        <div class="row">
          <div class="col-md-6 text-right">
            <Button color="secondary" variant="contained" onClick={this.back}>
              Back
            </Button>
          </div>
          <div class="col-md-6 text-left">
            <button class="btn btn-warning" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
