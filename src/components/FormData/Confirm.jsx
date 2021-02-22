import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleSubmit } = this.props;
    return (
      <div class="container">
        <div>
          Confirm Submission? <br />
          <button
            class="btn btn-warning"
            onClick={(handleSubmit, this.continue)}
          >
            Submit
          </button>
        </div>

        <Button color="secondary" variant="contained" onClick={this.back}>
          Back
        </Button>
      </div>
    );
  }
}

export default Confirm;
