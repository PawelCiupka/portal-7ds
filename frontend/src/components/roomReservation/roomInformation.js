import React, { useState, useEffect } from "react";
import { getRoomInformation } from "../../util/roomInformations";

const RoomReservationRoomInformation = props => {
  const [informations, setInformations] = useState("");

  useEffect(() => {
    getRoomInformation(props.roomSymbol).then(res => {
      setInformations(res);
    });
  }, []);

  return (
    <>
      <section>
        {informations !== "" ? (
          <div
            className="cms-content"
            dangerouslySetInnerHTML={{ __html: informations }}
          />
        ) : null}
      </section>
    </>
  );
};

export default RoomReservationRoomInformation;
