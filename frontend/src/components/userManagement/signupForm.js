import React, { useState } from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { signup } from "../../actions/session";
import * as roomHelper from "../../helpers/roomHelper";
import FormikInputFormGroup from "../formik/formikInputFormGroup";
import formikSelectFormGroup from "../formik/formikSelectFormGroup";
import { userManagementSignUpSchema } from "../../helpers/formSchemas/userManagement/userManagementSignUpSchema";

import { floorsOptions, roomNmbOptions } from "../../helpers/roomList";

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const SignUpForm = ({ signup }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      floor: "",
      roomNumber: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema: userManagementSignUpSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = e => {
    console.log(e);
    // e.preventDefault();

    // const room = e.target[3].value + e.target[4].value;
    // const user = {
    //   username: e.target[0].value,
    //   firstname: e.target[1].value,
    //   lastname: e.target[2].value,
    //   room: room,
    //   email: e.target[5].value,
    //   password: e.target[6].value
    // };

    // if (e.target[6].value === e.target[7].value) {
    //   signup(user);
    // } else {
    // }
  };

  return (
    <>
      <Form onSubmit={formik.handleSubmit}>
        {FormikInputFormGroup(
          "Nazwa użytkownika",
          "username",
          "text",
          formik,
          formik.values.username,
          formik.touched.username,
          formik.errors.username
        )}
        <Row>
          <Col>
            {FormikInputFormGroup(
              "Imię",
              "firstname",
              "text",
              formik,
              formik.values.firstname,
              formik.touched.firstname,
              formik.errors.firstname
            )}
          </Col>
          <Col>
            {FormikInputFormGroup(
              "Nazwisko",
              "lastname",
              "text",
              formik,
              formik.values.lastname,
              formik.touched.lastname,
              formik.errors.lastname
            )}
          </Col>
        </Row>
        {FormikInputFormGroup(
          "E-mail",
          "email",
          "text",
          formik,
          formik.values.email,
          formik.touched.email,
          formik.errors.email
        )}
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
        <Row>
          <Col>
            {FormikInputFormGroup(
              "Hasło",
              "password",
              "password",
              formik,
              formik.values.password,
              formik.touched.password,
              formik.errors.password
            )}
          </Col>
          <Col>
            {FormikInputFormGroup(
              "Potwierdź hasło",
              "confirmPassword",
              "password",
              formik,
              formik.values.confirmPassword,
              formik.touched.confirmPassword,
              formik.errors.confirmPassword
            )}
          </Col>
        </Row>

        <Button variant="primary" type="submit">
          Zarejestruj
        </Button>
      </Form>
    </>
  );
};

export default connect(null, mapDispatchToProps)(SignUpForm);
