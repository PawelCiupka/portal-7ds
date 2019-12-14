import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const RoomReservationTimetableReservedButton = props => {
  const getReservationDetailText = userDetails => {
    return userDetails.firstname + " " + userDetails.lastname;
  };

  return (
    <>
      <div className="reservation-btn-container">
        {props.hour.reservingUser._id === props.sessionUserId ? (
          <OverlayTrigger
            key="top"
            delay="1000"
            placement="top"
            overlay={<Tooltip id={"tooltip-top"}>Anuluj rezerwację</Tooltip>}
          >
            <Button
              variant="danger"
              onClick={() => {
                props.manageHourFunc(props.hour);
              }}
            >
              {props.hour.value}
            </Button>
          </OverlayTrigger>
        ) : (
          <OverlayTrigger
            key="top"
            delay="1000"
            placement="top"
            overlay={
              <Tooltip id={"tooltip-top"}>
                {getReservationDetailText(props.hour.reservingUser)}
              </Tooltip>
            }
          >
            <Button
              variant="danger"
              disabled="disabled"
              onClick={() => {
                props.manageHourFunc(props.hour);
              }}
            >
              {props.hour.value}
            </Button>
          </OverlayTrigger>
        )}
      </div>
    </>
  );
};

export default RoomReservationTimetableReservedButton;
