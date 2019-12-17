import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_TITLE,
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE,
  ROOM_RESERVATION_LIMIT
} from "../../../helpers/roomPredefineValues";

const TimetablePingPong = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title={ROOM_TITLE.PingPong}
        roomSymbol={ROOM_CODE.PingPong}
        hoursTemplate={ROOM_HOUR_TEMPLATE.PingPong}
        reservationAmountLimitDay={ROOM_RESERVATION_LIMIT.PingPong.day}
        reservationAmountLimitWeek={ROOM_RESERVATION_LIMIT.PingPong.week}
      />
    </>
  );
};

export default TimetablePingPong;
