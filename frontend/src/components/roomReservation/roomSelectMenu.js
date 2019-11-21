import React from "react";
import RoomReservationRoomSelectCard from "./roomSelectCard";

const RoomReservationRoomSelectMenu = () => {
  const goToTV = () => {
    console.log("GoToTV");
    document.location.href = "/dashboard/room-reservation/tv";
  };

  return (
    <>
      <RoomReservationRoomSelectCard
        imageSrc="http://icons.iconarchive.com/icons/flat-icons.com/flat/512/Flat-TV-icon.png"
        title="Salka TV"
        description="Oto salka TV"
        reservationFunc={goToTV}
      />
    </>
  );
};

export default RoomReservationRoomSelectMenu;
