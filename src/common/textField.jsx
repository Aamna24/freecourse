import React, { Component } from "react";

const Text = ({ name, label, error, ...rest }) => {
  return (
    <div className="form-group">
      <div class="row">
        <div class="col-md-4">
          <label htmlFor={name}>{label}</label>
        </div>
        <div class="col-md-8">
          <textarea
            {...rest}
            name={name}
            id={name}
            cols={40}
            rows={10}
            className="form-control"
          />
        </div>
      </div>

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Text;
