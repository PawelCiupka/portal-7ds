import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  floors,
  roomNumbers,
  getFloorFromRoom,
  getRoomNumberFromRoom
} from "../../helpers/roomHelper";
import { sendChangeRoomTicket } from "../../util/ticket";
import {
  mapAlertDispatchToProps,
  TicketAlerts
} from "../alert/alertController";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserRoomChangeForm = ({ session, showSuccessAlert, showErrorAlert }) => {
  const handleSubmit = async e => {
    e.preventDefault();

    const ticket = {
      userId: session.userId,
      username: session.username,
      firstname: session.firstname,
      lastname: session.lastname,
      oldRoom: session.room,
      newRoom: e.target[0].value + e.target[1].value
    };

    await sendChangeRoomTicket(ticket).then(resp => {
      if (resp.status === 200) {
        showSuccessAlert({
          message: TicketAlerts.success.change_room
        });
      } else {
        showErrorAlert({
          message: TicketAlerts.error.change_room
        });
      }
    });
  };

  return (
    <>
      <section>
        <h2>Wyślij prośbę o zmianę pokoju </h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Piętro:</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={getFloorFromRoom(session.room)}
                >
                  {floors().map(data => (
                    <option key={data.number} value={data.number}>
                      {data.number}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Pokój:</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue={getRoomNumberFromRoom(session.room)}
                >
                  {roomNumbers().map(data => (
                    <option key={data.value} value={data.value}>
                      {data.text}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Wyślij prośbę
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRoomChangeForm);
