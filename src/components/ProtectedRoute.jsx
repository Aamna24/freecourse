import React, { Component } from "react";
import { Redirect } from "react-router-dom";

const ProtectedRoutes = ({ user, component }) => {
  return <div>{user.name}</div>;
};

export default ProtectedRoutes;
