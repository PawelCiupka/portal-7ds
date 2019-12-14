import React from "react";
import { Button } from "react-bootstrap";

const RoomReservationTimetableFreeButton = props => {
  return (
    <>
      <div className="reservation-btn-container">
        {props.isDisabled === true ? (
          <Button
            variant="success"
            className="reservation-btn"
            disabled="disabled"
            onClick={() => {
              props.manageHourFunc(props.hour);
            }}
          >
            {props.hour.value}
          </Button>
        ) : (
          <Button
            variant="success"
            onClick={() => {
              props.manageHourFunc(props.hour);
            }}
          >
            {props.hour.value}
          </Button>
        )}
      </div>
    </>
  );
};

export default RoomReservationTimetableFreeButton;
