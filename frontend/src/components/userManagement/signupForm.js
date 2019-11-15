import React from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { signup } from "../../actions/session";
import * as roomHelper from "../../helpers/roomHelper";
import FormikInputFormGroup from "../formik/inputFormGroup";
import FormikSelectFormGroup from "../formik/selectFormGroup";
import { userManagementSignUpSchema } from "../../helpers/formSchemas/userManagement/signUpSchema";

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
});

const UserManagementSignUpForm = ({ signup }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      floor: "1",
      roomNumber: "03",
      password: "",
      confirmPassword: ""
    },
    validationSchema: userManagementSignUpSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = values => {
    const room = values.floor + values.roomNumber;
    const user = {
      username: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      room: room,
      email: values.email,
      password: values.password
    };

    signup(user);
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
            {FormikSelectFormGroup(
              "Piętro",
              "floor",
              formik,
              formik.values.floor,
              roomHelper.getFloorsToSelectFormGroup
            )}
          </Col>
          <Col>
            {FormikSelectFormGroup(
              "Pokój",
              "roomNumber",
              formik,
              formik.values.roomNumber,
              roomHelper.getRoomNumbersToSelectFormGroup
            )}
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

export default connect(null, mapDispatchToProps)(UserManagementSignUpForm);
