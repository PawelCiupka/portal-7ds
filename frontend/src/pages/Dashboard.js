import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../util/route";
import Header from "../components/header/header";
import UserCenter from "./dashboard/UserCenter";
import Home from "./dashboard/Home";

const Dashboard = () => (
  <>
    <Header pageTitle="Portal 7DS" />

    <Route exact path="/dashboard" component={Home} />
    <ProtectedRoute path="/dashboard/user/edit" component={UserCenter} />
  </>
);

export default Dashboard;
