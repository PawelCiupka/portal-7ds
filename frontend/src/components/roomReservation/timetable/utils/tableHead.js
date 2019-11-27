import React from "react";
import { getDayName } from "../../../../helpers/dateHelper";

const RoomReservationTimetableHead = props => {
  return (
    <>
      <p>
        <strong>{getDayName(props.date)}</strong>
      </p>
      <p>
        <small>{props.date}</small>
      </p>
    </>
  );
};

export default RoomReservationTimetableHead;
