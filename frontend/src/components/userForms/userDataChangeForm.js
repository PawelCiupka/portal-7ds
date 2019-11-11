import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import { updateInformation } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";
import {
  USERNAME,
  FIRSTNAME,
  LASTNAME,
  EMAIL
} from "../../helpers/formsErrorMessages";

const mapStateToProps = ({ session, errors }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserDataChangeForm = ({ session, showSuccessAlert, showErrorAlert }) => {
  const formik = useFormik({
    initialValues: {
      username: session.username,
      firstname: session.firstname,
      lastname: session.lastname,
      email: session.email
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required(USERNAME.errorMessage.required)
        .min(USERNAME.values.min, USERNAME.errorMessage.min)
        .max(USERNAME.values.max, USERNAME.errorMessage.max),
      firstname: yup
        .string()
        .required(FIRSTNAME.errorMessage.required)
        .min(FIRSTNAME.values.min, FIRSTNAME.errorMessage.min)
        .max(FIRSTNAME.values.max, FIRSTNAME.errorMessage.max),
      lastname: yup
        .string()
        .required(LASTNAME.errorMessage.required)
        .min(LASTNAME.values.min, LASTNAME.errorMessage.min)
        .max(LASTNAME.values.max, LASTNAME.errorMessage.max),
      email: yup
        .string()
        .required(EMAIL.errorMessage.required)
        .email(EMAIL.errorMessage.email)
    }),
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async values => {
    const user = {
      id: session.userId,
      username: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email
    };

    await updateInformation(user).then(resp => {
      if (resp.status === 200) {
        showSuccessAlert({
          message: UserAlerts.success.update_information
        });
        window.setTimeout(
          () => {
            window.location.reload();
          },
          4000,
          true
        );
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
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Nazwa użytkownika:</Form.Label>
            <Form.Control
              id="username"
              name="username"
              type="text"
              placeholder="Nazwa użytkownika"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
            />
            {formik.touched.username && formik.errors.username ? (
              <Form.Text className="text-danger">
                {formik.errors.username}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Imię:</Form.Label>
                <Form.Control
                  id="firstname"
                  name="firstname"
                  type="text"
                  placeholder="Imię"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstname}
                />
                {formik.touched.firstname && formik.errors.firstname ? (
                  <Form.Text className="text-danger">
                    {formik.errors.firstname}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Nazwisko:</Form.Label>
                <Form.Control
                  id="lastname"
                  name="lastname"
                  type="text"
                  placeholder="Nazwisko"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastname}
                />
                {formik.touched.lastname && formik.errors.lastname ? (
                  <Form.Text className="text-danger">
                    {formik.errors.lastname}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group>
            <Form.Label>E-mail:</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="text"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <Form.Text className="text-danger">
                {formik.errors.email}
              </Form.Text>
            ) : null}
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
