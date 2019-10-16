import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/session";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { floorsOptions, roomNmbOptions } from "../helpers/roomList";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const Signup = ({ errors, signup }) => {
  const [passError, setPassError] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setPassError("");

    const room = e.target[3].value + e.target[4].value;
    const user = {
      username: e.target[0].value,
      firstname: e.target[1].value,
      lastname: e.target[2].value,
      room: room,
      email: e.target[5].value,
      password: e.target[6].value
    };

    if (e.target[6].value === e.target[7].value) {
      signup(user);
    } else {
      setPassError("Hasła muszą być identyczne");
    }
  };

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nazwa użytkownika:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nazwa użytkownika"
              name="username"
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Imię:</Form.Label>
                <Form.Control type="text" placeholder="Imię" name="firstname" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nazwisko:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nazwisko"
                  name="lastname"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Piętro:</Form.Label>
                <Form.Control as="select">
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
                <Form.Control as="select">
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
            <Form.Control type="email" placeholder="E-mail" name="email" />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Hasło:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Hasło"
                  name="password"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Powtórz hasło:</Form.Label>
                <Form.Control type="password" placeholder="Powtórz hasło" />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Zarejestruj
          </Button>
        </Form>
        <p>{passError}</p>
        <p>{errors}</p>

        <br />
        <p>
          Masz już konto? <Link to="/login">Zaloguj się</Link>
        </p>
      </Container>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
