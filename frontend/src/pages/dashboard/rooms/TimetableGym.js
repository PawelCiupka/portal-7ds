import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_TITLE,
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE,
  ROOM_RESERVATION_LIMIT
} from "../../../helpers/roomPredefineValues";

const TimetableGym = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title={ROOM_TITLE.Gym}
        roomSymbol={ROOM_CODE.Gym}
        hoursTemplate={ROOM_HOUR_TEMPLATE.Gym}
        reservationAmountLimitDay={ROOM_RESERVATION_LIMIT.Gym.day}
        reservationAmountLimitWeek={ROOM_RESERVATION_LIMIT.Gym.week}
      />
    </>
  );
};

export default TimetableGym;
