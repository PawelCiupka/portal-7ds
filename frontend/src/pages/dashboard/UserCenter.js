import React from "react";
import { connect } from "react-redux";
import { Form, Col, Row, Button } from "react-bootstrap";
import {
  floorsOptions,
  roomNmbOptions,
  getRoomNmb,
  getFloor
} from "../../helpers/roomList";
import { signup } from "../../actions/session";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const UserCenter = ({ session }) => {
  const handleSubmit = () => {};

  console.log(session);

  return (
    <>
      <h1>Cześć z centrum zarządzania użytkownikiem!</h1>

      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nazwa użytkownika:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nazwa użytkownika"
            name="username"
            defaultValue={session.username}
          />
        </Form.Group>
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
              <Form.Control as="select" defaultValue={getRoomNmb(session.room)}>
                {roomNmbOptions.map(data => (
                  <option key={data.id} value={data.value}>
                    {data.text}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group>
          <Form.Label>E-mail:</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            name="email"
            defaultValue={session.email}
          />
        </Form.Group>
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
              <Form.Control type="password" placeholder="Powtórz nowe hasło" />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="primary" type="submit">
          Zarejestruj
        </Button>
      </Form>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCenter);
