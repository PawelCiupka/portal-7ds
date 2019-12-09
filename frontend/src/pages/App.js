import React from "react";
import { Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Dashboard from "./Dashboard";
import { AuthRoute, ProtectedRoute } from "../util/route";
import "../styles/index";

export default () => (
  <>
    <div id="app-idc">
      <div id="slider-hidder" />
      <Route exact path="/" component={Login} />
      <AuthRoute path="/login" component={Login} />
      <AuthRoute path="/signup" component={Signup} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
    </div>
  </>
);
