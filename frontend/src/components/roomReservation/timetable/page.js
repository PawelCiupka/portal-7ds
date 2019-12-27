import React from "react";
import { Button, Card } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import RoomReservationTimetableTable from "./termTable";
import RoomReservationRoomInformation from "../roomInformation";

const RoomReservationPage = props => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <>
      <section>
        <div className="dashboard-page-title">
          <Button variant="primary" className="back-button" onClick={goBack}>
            <Icon name="arrow left" />
          </Button>
          <h4>{props.title}</h4>
        </div>

        <Card className="dashboard-card">
          <RoomReservationTimetableTable
            roomSymbol={props.roomSymbol}
            hoursTemplate={props.hoursTemplate}
            reservationAmountLimitDay={props.reservationAmountLimitDay}
            reservationAmountLimitWeek={props.reservationAmountLimitWeek}
          />
        </Card>

        <Card className="dashboard-card">
          <RoomReservationRoomInformation roomSymbol={props.roomSymbol} />
        </Card>
      </section>
    </>
  );
};

export default RoomReservationPage;
