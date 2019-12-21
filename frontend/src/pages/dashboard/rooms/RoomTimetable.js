import React, { useState, useEffect } from "react";
import { getRoomHoursTemplate, getRoomDetails } from "../../../util/room";
import RoomReservationPage from "../../../components/roomReservation/timetable/page";

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
        <RoomReservationPage
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
