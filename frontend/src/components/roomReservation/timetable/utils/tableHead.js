import React from "react";
import { getDayName } from "../../../../helpers/dateHelper";

const RoomReservationTimetableHead = props => {
  return (
    <>
      <div className="table-head-col-container">
        <p>{getDayName(props.date)}</p>
        <p>{props.date}</p>
      </div>
    </>
  );
};

export default RoomReservationTimetableHead;
