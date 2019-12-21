import React from "react";
import { Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import RoomReservationTimetableTable from "./termTable";
import RoomReservationRoomInformation from "../roomInformation";

const RoomReservationPage = props => {
  const goBack = () => {
    window.history.back();
  };
  return (
    <>
      <div className="dashboard-page-title">
        <Button variant="secondary" onClick={goBack}>
          <Icon name="arrow left" />
        </Button>
        <h4>{props.title}</h4>
      </div>

      <RoomReservationTimetableTable
        roomSymbol={props.roomSymbol}
        hoursTemplate={props.hoursTemplate}
        reservationAmountLimitDay={props.reservationAmountLimitDay}
        reservationAmountLimitWeek={props.reservationAmountLimitWeek}
      />

      <RoomReservationRoomInformation roomSymbol={props.roomSymbol} />
    </>
  );
};

export default RoomReservationPage;
