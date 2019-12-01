import React from "react";
import { Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ProtectedRoute } from "../util/route";
import UserCenter from "./dashboard/UserCenter";
import Home from "./dashboard/Home";
import SuccessAlert from "../components/alert/successAlert";
import ErrorAlert from "../components/alert/errorAlert";
import Management from "./dashboard/Management";
import RoomReservation from "./dashboard/RoomReservation";
import TimetableRoomTV from "./dashboard/rooms/TimetableRoomTV";
import Menu from "../components/menu/menu";

const Dashboard = () => (
  <>
    <SuccessAlert />
    <ErrorAlert />
    <Menu />
    <Container>
      <Route exact path="/dashboard" component={Home} />
      <ProtectedRoute path="/dashboard/user/edit" component={UserCenter} />
      <ProtectedRoute path="/dashboard/management" component={Management} />
      <ProtectedRoute
        path="/dashboard/room-reservation/menu"
        component={RoomReservation}
      />
      <ProtectedRoute
        path="/dashboard/room-reservation/tv"
        component={TimetableRoomTV}
      />
    </Container>
  </>
);

export default Dashboard;
