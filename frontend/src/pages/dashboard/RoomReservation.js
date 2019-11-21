import React from "react";
import RoomReservationRoomSelectMenu from "../../components/roomReservation/roomSelectMenu";

const RoomReservation = () => {
  return (
    <>
      <h1>Cześć ze strony rezerwacji salek!</h1>
      <h5>
        Tutaj będzie ładne menu do wyboru salek, które zaprowadzi cię do ładnej
        tabelki, dzięki której ładnie zarezerwujesz sobie wybraną salke w naszym
        ładnym akademiku :)
      </h5>

      <RoomReservationRoomSelectMenu />
    </>
  );
};

export default RoomReservation;
