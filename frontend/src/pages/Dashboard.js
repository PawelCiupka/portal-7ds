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
import RoomTimetable from "./dashboard/rooms/RoomTimetable";
import Menu from "../components/menu/menu";

const Dashboard = () => (
  <>
    <SuccessAlert />
    <ErrorAlert />
    <Menu />
    <div id="main-content">
      <Container id="desktop-container">
        <Route exact path="/dashboard" component={Home} />
        <ProtectedRoute path="/dashboard/user/edit" component={UserCenter} />
        <ProtectedRoute path="/dashboard/management" component={Management} />
        <ProtectedRoute
          path="/dashboard/room-reservation/menu"
          component={RoomReservation}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/gym"
          component={() => <RoomTimetable roomSymbol="G" />}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/billiards"
          component={() => <RoomTimetable roomSymbol="B" />}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/tv"
          component={() => <RoomTimetable roomSymbol="T" />}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/fitness"
          component={() => <RoomTimetable roomSymbol="F" />}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/pingpong"
          component={() => <RoomTimetable roomSymbol="P" />}
        />
      </Container>
    </div>
  </>
);

export default Dashboard;
