import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { login } from "../../actions/session";
import { userManagementLoginSchema } from "../../helpers/formSchemas/userManagement/loginSchema";
import FormikInputWithIconFormGroup from "../formik/inputWithIconFormGroup";

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
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        {FormikInputWithIconFormGroup(
          "Nazwa użytkownika",
          "username",
          "text",
          "user",
          formik,
          formik.values.username,
          formik.touched.username,
          formik.errors.username
        )}
        {FormikInputWithIconFormGroup(
          "Hasło",
          "password",
          "password",
          "key",
          formik,
          formik.values.password,
          formik.touched.password,
          formik.errors.password
        )}

        <div className="login-form-error">
          <p>{errors}</p>
        </div>

        <Button className="btn-fancy" type="submit">
          Zaloguj
        </Button>
      </Form>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserManagementLoginForm);
