import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const RoomReservationRoomSelectCard = props => {
  return (
    <>
      <Card
        className="reservation-card-container"
        onClick={props.reservationFunc}
      >
        <div className="reservation-card-color" />
        <Card.Body>
          <div className="reservation-card-menu-wrapper">
            <Card.Title>{props.title}</Card.Title>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RoomReservationRoomSelectCard;

RoomReservationRoomSelectCard.prototype = {
  title: PropTypes.string.isRequired
};
