import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import auth from "../services/adminService";
const ProtectedRoute = ({ path, component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!auth.getCurrentUser()) return <Redirect to="/admin" />;
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
