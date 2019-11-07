import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import { updateInformation } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";

const mapStateToProps = ({ session, errors }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const schema = yup.object({
  username: yup
    .string()
    .required("Nazwa użytkownika jest wymagana")
    .min(4, "Minimalna ilość znaków to 4")
    .max(20, "Maksymalna ilośc znaków to 20"),
  email: yup
    .string()
    .required("E-mail jest wymagany")
    .email("Nieprawidłowy e-mail")
});

const UserDataChangeForm = ({
  session,
  showSuccessAlert,
  showErrorAlert,
  schema
}) => {
  const handleSubmit = async e => {
    e.preventDefault();

    const user = {
      id: session.userId,
      username: e.target[0].value,
      firstname: e.target[1].value,
      lastname: e.target[2].value,
      email: e.target[3].value
    };

    await updateInformation(user).then(resp => {
      if (resp.status === 200) {
        showSuccessAlert({
          message: UserAlerts.success.update_information
        });
        window.setTimeout("window.location.reload()", 4000, true);
      } else {
        showErrorAlert({
          message: UserAlerts.error.update_information
        });
      }
    });
  };

  return (
    <>
      <section>
        <h2>Zmień dane osobowe</h2>
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
                <Form.Label>Imię:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Imię"
                  name="firstname"
                  defaultValue={session.firstname}
                  disabled
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nazwisko:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nazwisko"
                  name="lastname"
                  defaultValue={session.lastname}
                  disabled
                />
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
          <Button variant="primary" type="submit">
            Zmień
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDataChangeForm);
