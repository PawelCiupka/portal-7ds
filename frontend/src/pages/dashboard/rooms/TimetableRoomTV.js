import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";

const TimetableRoomTV = () => {
  const hours = ["11:00", "13:00", "15:00", "17:00", "19:00", "21:00"];

  return (
    <>
      <RoomReservationTimetableTable
        title="Salka TV"
        roomSymbol={"T"}
        hoursTemplate={hours}
      />
    </>
  );
};

export default TimetableRoomTV;
