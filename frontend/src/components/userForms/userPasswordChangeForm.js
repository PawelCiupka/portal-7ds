import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { updateSecurity } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";

const mapStateToProps = ({ session, errors }) => ({
  session,
  errors
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserPasswordChangeForm = ({
  session,
  showSuccessAlert,
  showErrorAlert
}) => {
  const [passError, setPassError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setPassError("");

    if (e.target[1].value === e.target[2].value) {
      const user = {
        id: session.userId,
        oldPassword: e.target[0].value,
        password: e.target[1].value
      };

      await updateSecurity(user).then(resp => {
        if (resp.status === 200) {
          showSuccessAlert({
            message: UserAlerts.success.update_security
          });
        } else {
          showErrorAlert({
            message: UserAlerts.error.update_security
          });
        }
      });
    } else {
      setPassError("Hasła muszą być identyczne");
    }
  };

  return (
    <>
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
                <Form.Label>Potwierdź nowe hasło:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Potwierdź nowe hasło"
                />
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Zmień
          </Button>
        </Form>
        <p>{passError}</p>
      </section>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPasswordChangeForm);
