import React, { useState, useEffect } from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";
import {
  getRoomHoursTemplate,
  getRoomDetails
} from "../../../util/room";

const RoomTimetable = props => {
  const [hoursTemplate, setHoursTemplate] = useState([]);
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const initialize = async rs => {
      await getRoomDetails(rs).then(async res => {
        await setRoom(res);
      });
      await getRoomHoursTemplate(rs).then(async res => {
        await setHoursTemplate(res);
      });
    };
    initialize(props.roomSymbol);
  }, []);

  return (
    <>
      {room !== null ? (
        <RoomReservationTimetableTable
          title={room.name}
          roomSymbol={props.roomSymbol}
          hoursTemplate={hoursTemplate}
          reservationAmountLimitDay={room.dailyLimit}
          reservationAmountLimitWeek={room.weeklyLimit}
        />
      ) : null}
    </>
  );
};

export default RoomTimetable;
