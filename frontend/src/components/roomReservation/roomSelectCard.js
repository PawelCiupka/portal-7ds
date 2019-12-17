import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const RoomReservationRoomSelectCard = props => {
  return (
    <>
      <Card className="reservation-card-container">
        <div className="reservation-card-color" />
        <Card.Body>
          <div className="reservation-card-menu-wrapper">
            <Card.Title>{props.title}</Card.Title>
            <div className="reservice-card-buttons-wrapper">
              <Button variant="primary" onClick={props.informationFunc}>
                Informacje
              </Button>
              <br />
              <Button variant="primary" onClick={props.reservationFunc}>
                Rezerwuj
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default RoomReservationRoomSelectCard;

RoomReservationRoomSelectCard.prototype = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};
