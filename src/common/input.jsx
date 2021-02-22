import React, { Component } from "react";

const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <div class="row">
        <div class="col-md-4">
          <label htmlFor={name}>{label}</label>
        </div>
        <div class="col-md-8">
          <input {...rest} name={name} id={name} className="form-control" />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
