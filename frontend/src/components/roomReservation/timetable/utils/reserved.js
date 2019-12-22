import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { doDisableButtonByHour } from "../../../../helpers/dateHelper";

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
            {doDisableButtonByHour(props.hour.value) &&
            Number(props.dayOfWeek) === 0 ? (
              <Button variant="danger" disabled="disabled">
                {props.hour.value}
              </Button>
            ) : (
              <Button
                variant="danger"
                onClick={() => {
                  props.manageHourFunc(props.hour);
                }}
              >
                {props.hour.value}
              </Button>
            )}
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
