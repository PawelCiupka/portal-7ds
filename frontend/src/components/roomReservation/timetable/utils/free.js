import React from "react";
import { Button } from "react-bootstrap";

const RoomReservationTimetableFreeButton = props => {
  return (
    <>
      {props.isDisabled === true ? (
        <Button
          variant="success"
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
    </>
  );
};

export default RoomReservationTimetableFreeButton;
