import React from "react";
import RoomReservationTimetableTable from "../../../components/roomReservation/timetable/termTable";

const TimetableRoomTV = () => {
  const days = [
    {
      name: "Poniedziałek",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Wtorek",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Środa",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Czwartek",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Piątek",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Sobota",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    },
    {
      name: "Niedziela",
      hours: [
        "10:00",
        "11:00",
        "12:00",
        "13:00",
        "14:00",
        "15:00",
        "16:00",
        "17:00",
        "18:00",
        "19:00"
      ]
    }
  ];

  const hours = [
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00"
  ];
  return (
    <>
      <RoomReservationTimetableTable
        title="Salka TV"
        days={days}
        hoursTemplate={hours}
      />
    </>
  );
};

export default TimetableRoomTV;
