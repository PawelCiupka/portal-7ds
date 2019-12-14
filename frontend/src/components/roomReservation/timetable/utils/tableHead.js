import React from "react";
import { getDayName } from "../../../../helpers/dateHelper";

const RoomReservationTimetableHead = props => {
  return (
    <>
      <div className="table-head-col-container">
        <p>
          <strong>{getDayName(props.date)}</strong>
        </p>
        <p>
          <small>{props.date}</small>
        </p>
      </div>
    </>
  );
};

export default RoomReservationTimetableHead;
