import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_TITLE,
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE,
  ROOM_RESERVATION_LIMIT
} from "../../../helpers/roomPredefineValues";

const TimetableFitness = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title={ROOM_TITLE.Fitness}
        roomSymbol={ROOM_CODE.Fitness}
        hoursTemplate={ROOM_HOUR_TEMPLATE.Fitness}
        reservationAmountLimitDay={ROOM_RESERVATION_LIMIT.Fitness.day}
        reservationAmountLimitWeek={ROOM_RESERVATION_LIMIT.Fitness.week}
      />
    </>
  );
};

export default TimetableFitness;
