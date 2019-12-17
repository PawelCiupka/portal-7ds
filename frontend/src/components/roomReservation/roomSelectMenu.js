import React from "react";
import RoomReservationRoomSelectCard from "./roomSelectCard";
import { ROOM_TITLE } from "../../helpers/roomPredefineValues";

const RoomReservationRoomSelectMenu = () => {
  const goToGym = () => {
    document.location.href = "/dashboard/room-reservation/gym";
  };
  const goToBilliards = () => {
    document.location.href = "/dashboard/room-reservation/billiards";
  };
  const goToTV = () => {
    document.location.href = "/dashboard/room-reservation/tv";
  };  
  const goToFitness = () => {
    document.location.href = "/dashboard/room-reservation/fitness";
  };
  const goToPingPong = () => {
    document.location.href = "/dashboard/room-reservation/pingpong";
  };

  return (
    <>
      <div id="room-select-menu">
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Gym}
          description="Oto Siłownia"
          reservationFunc={goToGym}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Billiards}
          description="Oto Bilard"
          reservationFunc={goToBilliards}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Tv}
          description="Oto Salka multimedialna"
          reservationFunc={goToTV}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Fitness}
          description="Oto Fitness"
          reservationFunc={goToFitness}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.PingPong}
          description="Ping Pong"
          reservationFunc={goToPingPong}
        />
      </div>
    </>
  );
};

export default RoomReservationRoomSelectMenu;
