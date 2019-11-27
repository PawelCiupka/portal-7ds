import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE
} from "../../../helpers/roomAccessHelper";

const TimetableRoomTV = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title="Salka TV"
        roomSymbol={ROOM_CODE.Tv}
        hoursTemplate={ROOM_HOUR_TEMPLATE.Tv}
      />
    </>
  );
};

export default TimetableRoomTV;
