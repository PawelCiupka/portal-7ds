import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_TITLE,
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE,
  ROOM_RESERVATION_LIMIT
} from "../../../helpers/roomPredefineValues";

const TimetableRoomTV = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title={ROOM_TITLE.Tv}
        roomSymbol={ROOM_CODE.Tv}
        hoursTemplate={ROOM_HOUR_TEMPLATE.Tv}
        reservationAmountLimitDay={ROOM_RESERVATION_LIMIT.Tv.day}
        reservationAmountLimitWeek={ROOM_RESERVATION_LIMIT.Tv.week}
      />
    </>
  );
};

export default TimetableRoomTV;
