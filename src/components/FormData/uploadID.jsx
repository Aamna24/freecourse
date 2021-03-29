import React, { Component, useState } from "react";
import Button from "@material-ui/core/Button";
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
    <div style={{ marginTop: "20px" }}>
      <input
        type="file"
        name="idPic"
        onChange={(e) => {
          setId(e.target.files[0]);
        }}
      />
      <Button onClick={handleSubmitID}>Submit your ID</Button>

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
