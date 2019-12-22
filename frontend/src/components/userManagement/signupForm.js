import React from "react";
import { connect } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import { signup } from "../../actions/session";
import * as roomHelper from "../../helpers/roomHelper";
import { userManagementSignUpSchema } from "../../helpers/formSchemas/userManagement/signUpSchema";
import FormikInputNoLabelFormGroup from "../formik/inputNoLabelFormGroup";
import FormikSelectNoLabelFormGroup from "../formik/selectNoLabelFormGroup";

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
      <section>
        <Form className="register-form" onSubmit={formik.handleSubmit}>
          {FormikInputNoLabelFormGroup(
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
              {FormikInputNoLabelFormGroup(
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
              {FormikInputNoLabelFormGroup(
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
          {FormikInputNoLabelFormGroup(
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
              {FormikSelectNoLabelFormGroup(
                "floor",
                formik,
                formik.values.floor,
                roomHelper.getFloorsWithDefaultToSelectFormGroup
              )}
            </Col>
            <Col>
              {FormikSelectNoLabelFormGroup(
                "roomNumber",
                formik,
                formik.values.roomNumber,
                roomHelper.getRoomNumbersWithDefaultToSelectFormGroup
              )}
            </Col>
          </Row>
          {FormikInputNoLabelFormGroup(
            "Hasło",
            "password",
            "password",
            formik,
            formik.values.password,
            formik.touched.password,
            formik.errors.password
          )}
          {FormikInputNoLabelFormGroup(
            "Potwierdź hasło",
            "confirmPassword",
            "password",
            formik,
            formik.values.confirmPassword,
            formik.touched.confirmPassword,
            formik.errors.confirmPassword
          )}

          <Button className="btn-fancy" type="submit">
            Zarejestruj
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(null, mapDispatchToProps)(UserManagementSignUpForm);
