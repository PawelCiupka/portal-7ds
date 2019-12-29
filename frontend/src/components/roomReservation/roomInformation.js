import React, { useState, useEffect } from "react";
import { getRoomInformation } from "../../util/room";

const RoomReservationRoomInformation = props => {
  const [information, setInformation] = useState("");

  useEffect(() => {
    getRoomInformation(props.roomSymbol).then(res => {
      setInformation(res);
    });
  }, []);

  return (
    <>
      <section>
        {information !== "" && information !== null ? (
          <div
            className="cms-content"
            dangerouslySetInnerHTML={{ __html: information.content.html }}
          />
        ) : null}
      </section>
    </>
  );
};

export default RoomReservationRoomInformation;
