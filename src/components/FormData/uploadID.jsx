import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
import ScrollToTopOnMount from "../../common/ScrollToMount";

import * as auth from "../../services/authService";
import { toast } from "react-toastify";
toast.configure();

const UploadID = (props) => {
  const [idPic, setId] = useState();

  const back = (e) => {
    e.preventDefault();
    props.prevStep();
  };
  const continues = (e) => {
    e.preventDefault();
    props.nextStep();
  };
  const handleSubmitID = async () => {
    const data = new FormData();
    data.append("nationalInsNo", props.props);
    data.append("idPic", idPic);

    const response = await auth.uploadID(data);
    console.log(response);
    toast.success("ID Uploaded successfully");
  };

  return (
    <div style={{ marginTop: "20px" }} className="container">
      <ScrollToTopOnMount />
      <h3>Step 7- ID Proof</h3>
      <br />
      <label>
        The coures are fully funded.Proof of identity is mandatory to access the
        funding. If this is not provided you will be ineligible for funding and
        will not be able to access your chosen course.
      </label>
      <br />
      <label>
        Examples of acceptable ID evidences are: Passport / Birth Certificate /
        Full Drivers License (provisional licences are not acceptable)
      </label>
      <div className="row">
        <div className="col-md-6">
          <p className="pBold required">
            Please upload one of the following ID Proofs- Passport / Birth
            Certificate / Full Drivers License (provisional licences are not
            acceptable)
          </p>
        </div>
        <div className="col">
          <input
            type="file"
            name="idPic"
            onChange={(e) => {
              setId(e.target.files[0]);
            }}
          />
          <Button variant="contained" color="primary" onClick={handleSubmitID}>
            Submit your ID
          </Button>
        </div>
      </div>

      <Button color="primary" variant="contained" onClick={back} id="btns">
        Back
      </Button>

      <Button color="primary" variant="contained" onClick={continues} id="btns">
        Continue
      </Button>
    </div>
  );
};

export default UploadID;
