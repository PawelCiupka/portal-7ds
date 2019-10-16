import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions/session";
import { Container, Form, Button } from "react-bootstrap";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const Login = ({ errors, login }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      password: e.target[1].value
    };

    login(user);
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
          <Form.Group>
            <Form.Label>Hasło:</Form.Label>
            <Form.Control type="password" placeholder="Hasło" name="password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Zaloguj się
          </Button>
        </Form>
        <p>{errors}</p>

        <br />
        <p>
          Nie masz konta? <Link to="/signup">Zarejestruj się</Link>
        </p>
      </Container>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
