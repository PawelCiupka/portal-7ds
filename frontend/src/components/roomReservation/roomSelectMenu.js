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
      <section id="room-select-menu">
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Gym}
          reservationFunc={goToGym}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Billiards}
          reservationFunc={goToBilliards}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Tv}
          reservationFunc={goToTV}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.Fitness}
          reservationFunc={goToFitness}
        />
        <RoomReservationRoomSelectCard
          title={ROOM_TITLE.PingPong}
          reservationFunc={goToPingPong}
        />
      </section>
    </>
  );
};

export default RoomReservationRoomSelectMenu;
