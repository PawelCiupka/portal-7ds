import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  ROOM_TITLE,
  ROOM_CODE,
  ROOM_HOUR_TEMPLATE,
  ROOM_RESERVATION_LIMIT
} from "../../../helpers/roomPredefineValues";

const TimetableBilliards = () => {
  return (
    <>
      <RoomReservationTimetableTable
        title={ROOM_TITLE.Billiards}
        roomSymbol={ROOM_CODE.Billiards}
        hoursTemplate={ROOM_HOUR_TEMPLATE.TBilliardsv}
        reservationAmountLimitDay={ROOM_RESERVATION_LIMIT.Billiards.day}
        reservationAmountLimitWeek={ROOM_RESERVATION_LIMIT.Billiards.week}
      />
    </>
  );
};

export default TimetableBilliards;
