import React from "react";
import Button from "@material-ui/core/Button";
import * as auth from "../services/adminService";
import { toast, ToastContainer } from "react-toastify";
toast.configure();

const UpdateCollegeInfo = () => {
  const querystring = window.location.search;
  const URLParams = new URLSearchParams(querystring);
  const id = URLParams.get("id");

  const [contractAmt, setConAmt] = React.useState();
  const [price, setPrice] = React.useState();

  const handleSubmit = async () => {
    const contractAmount = parseInt(contractAmt);
    const pricePerApp = parseInt(price);

    const response = await auth.updateCollegeInfo(
      id,
      contractAmount,
      pricePerApp
    );
    if (response.status === 200) {
      toast.success("Update Successully");
      window.location.href = "/colleges";
    }
  };
  return (
    <div>
      <div>
        <label>Enter Contract Amount</label>
        <input
          type="number"
          onChange={(e) => {
            setConAmt(e.target.value);
          }}
        />
      </div>
      <div>
        <label>Enter Price Per Application</label>
        <input
          type="number"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <br />
      <div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update
        </Button>
      </div>
    </div>
  );
};

export default UpdateCollegeInfo;
