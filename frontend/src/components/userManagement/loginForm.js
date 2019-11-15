import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { login } from "../../actions/session";
import FormikInputFormGroup from "../formik/inputFormGroup";
import { userManagementLoginSchema } from "../../helpers/formSchemas/userManagement/loginSchema";

const mapStateToProps = ({ errors }) => ({
  errors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user))
});

const UserManagementLoginForm = ({ login, errors }) => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    validationSchema: userManagementLoginSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = values => {
    const user = {
      username: values.username,
      password: values.password
    };

    login(user);
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
        {FormikInputFormGroup(
          "Hasło",
          "password",
          "password",
          formik,
          formik.values.password,
          formik.touched.password,
          formik.errors.password
        )}

        <p>{errors}</p>

        <Button variant="primary" type="submit">
          Zaloguj
        </Button>
      </Form>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagementLoginForm);
