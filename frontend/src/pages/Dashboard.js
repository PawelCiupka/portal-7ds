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
import TimetableGym from "./dashboard/rooms/TimetableGym";
import TimetableBilliards from "./dashboard/rooms/TimetableBilliards";
import TimetableFitness from "./dashboard/rooms/TimetableFitness";
import TimetablePingPong from "./dashboard/rooms/TimetablePingPong";
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
          component={TimetableGym}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/billiards"
          component={TimetableBilliards}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/tv"
          component={TimetableRoomTV}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/fitness"
          component={TimetableFitness}
        />
        <ProtectedRoute
          path="/dashboard/room-reservation/pingpong"
          component={TimetablePingPong}
        />
      </Container>
    </div>
  </>
);

export default Dashboard;
