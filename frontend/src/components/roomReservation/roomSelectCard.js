import React from "react";
import { Card, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const RoomReservationRoomSelectCard = props => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.imageSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" onClick={props.informationFunc}>
            Informacje
          </Button>
          <br />
          <Button variant="primary" onClick={props.reservationFunc}>
            Rezerwuj
          </Button>
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
