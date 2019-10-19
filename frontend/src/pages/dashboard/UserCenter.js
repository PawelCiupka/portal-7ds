import React from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import {
  floorsOptions,
  roomNmbOptions,
  getRoomNmb,
  getFloor
} from "../../helpers/roomList";
import { updateInformation } from "../../util/user";
import UserDataChangeForm from "../../components/userForms/userDataChangeForm";
import UserRoomChangeForm from "../../components/userForms/userRoomChangeForm";

const mapStateToProps = ({ session }) => ({
  session
});

const UserCenter = ({ session }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const room = e.target[3].value + e.target[4].value;
    const user = {
      id: session.userId,
      username: e.target[0].value,
      room: room,
      email: e.target[5].value
    };

    updateInformation(user);
  };

  console.log(session);

  return (
    <>
      <h1>Cześć z centrum zarządzania użytkownikiem!</h1>

      <UserDataChangeForm />
      <UserRoomChangeForm />

      <section>
        <h2>Zmień dane dotyczące bezpieczeństwa</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Stare hasło:</Form.Label>
            <Form.Control
              type="password"
              placeholder="Stare hasło"
              name="oldPassword"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nowe hasło:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Nowe hasło"
                  name="password"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Powtórz nowe hasło:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Powtórz nowe hasło"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Zmień
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(mapStateToProps)(UserCenter);
