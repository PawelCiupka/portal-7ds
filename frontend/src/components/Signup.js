import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { signup } from "../actions/session";
import { Container, Form, Button, Row, Col } from "react-bootstrap";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const floorsOptions = [
  { key: "1", text: "1", value: "1" },
  { key: "2", text: "2", value: "2" },
  { key: "3", text: "3", value: "3" },
  { key: "4", text: "4", value: "4" },
  { key: "5", text: "5", value: "5" },
  { key: "6", text: "6", value: "6" },
  { key: "7", text: "7", value: "7" },
  { key: "8", text: "8", value: "8" },
  { key: "9", text: "9", value: "9" },
  { key: "10", text: "10", value: "10" },
  { key: "11", text: "11", value: "11" },
  { key: "12", text: "12", value: "12" },
  { key: "13", text: "13", value: "13" },
  { key: "14", text: "14", value: "14" },
  { key: "15", text: "15", value: "15" },
  { key: "16", text: "16", value: "16" }
];

const roomNmbOptions = [
  { key: "3", text: "3", value: "03" },
  { key: "4", text: "4", value: "04" },
  { key: "5", text: "5", value: "05" },
  { key: "6", text: "6", value: "06" },
  { key: "7", text: "7", value: "07" },
  { key: "8", text: "8", value: "08" },
  { key: "9", text: "9", value: "09" },
  { key: "10", text: "10", value: "10" },
  { key: "11", text: "11", value: "11" },
  { key: "12", text: "12", value: "12" },
  { key: "13", text: "13", value: "13" },
  { key: "14", text: "14", value: "14" },
  { key: "15", text: "15", value: "15" },
  { key: "16", text: "16", value: "16" }
];

const Signup = ({ errors, signup }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: e.target[0].value,
      firstname: e.target[1].value,
      lastname: e.target[2].value,
      room: e.target[3].value,
      email: e.target[4].value,
      password: e.target[5].value
    };

    console.log(e.target[0].value);
    console.log(e.target[1].value);
    console.log(e.target[2].value);
    console.log(e.target[3].value);
    console.log(e.target[4].value);
    console.log(e.target[5].value);
    console.log(e.target[6].value);
    console.log(user);

    if (e.target[5].value === e.target[6].value) {
      signup(user);
    } else {
      console.log("xd");
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
