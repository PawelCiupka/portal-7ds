import React from "react";
import RoomReservationRoomSelectMenu from "../../components/roomReservation/roomSelectMenu";

const RoomReservation = () => {
  return (
    <>
      <div className="dashboard-page-title">
        <h4>Rezerwacja salek</h4>
      </div>
      <RoomReservationRoomSelectMenu />
    </>
  );
};

export default RoomReservation;
