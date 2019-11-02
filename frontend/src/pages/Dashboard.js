import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ProtectedRoute } from "../util/route";
import Header from "../components/header/header";
import UserCenter from "./dashboard/UserCenter";
import Home from "./dashboard/Home";
import SuccessfulAlert from "../components/alert/successfulAlert";

const Dashboard = () => (
  <>
    <SuccessfulAlert />
    <Header pageTitle="Portal 7DS" />
    <Container>
      <Route exact path="/dashboard" component={Home} />
      <ProtectedRoute path="/dashboard/user/edit" component={UserCenter} />
    </Container>
  </>
);

export default Dashboard;
