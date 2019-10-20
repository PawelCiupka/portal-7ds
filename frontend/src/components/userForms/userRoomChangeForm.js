import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import {
  floorsOptions,
  roomNmbOptions,
  getRoomNmb,
  getFloor
} from "../../helpers/roomList";

const mapStateToProps = ({ session }) => ({
  session
});

const UserRoomChangeForm = ({ session }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const room = e.target[0].value + e.target[1].value;
    const user = {
      id: session.userId,
      room: room
    };

    //updateInformation(user);
  };

  return (
    <>
      <section>
        <h2>Wyślij prośbę o zmianę pokoju</h2>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Piętro:</Form.Label>
                <Form.Control as="select" defaultValue={getFloor(session.room)}>
                  {floorsOptions.map(data => (
                    <option key={data.id} value={data.value}>
                      {data.text}
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
                  defaultValue={getRoomNmb(session.room)}
                >
                  {roomNmbOptions.map(data => (
                    <option key={data.id} value={data.value}>
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

export default connect(mapStateToProps)(UserRoomChangeForm);
