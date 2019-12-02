import React from "react";
import { connect } from "react-redux";
import { Form, InputGroup, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { Icon } from "semantic-ui-react";
import { login } from "../../actions/session";
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
      <Form className="login-form" onSubmit={formik.handleSubmit}>
        <Form.Group className="login-form-group">
          <InputGroup className="login-input-group">
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Icon name="user" />
              </InputGroup.Text>
            </InputGroup.Prepend>
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
              <Form.Text>{formik.errors.username}</Form.Text>
            ) : null}
          </InputGroup>
        </Form.Group>

        <Form.Group>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text>
                <Icon name="key" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <Form.Control
              id="password"
              name="password"
              type="password"
              placeholder="Hasło"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password ? (
              <Form.Text>{formik.errors.password}</Form.Text>
            ) : null}
          </InputGroup>
        </Form.Group>

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
