import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { useFormik } from "formik";
import { updateSecurity } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";
import {
  OLD_PASSWORD,
  PASSWORD,
  CONFIRM_PASSWORD
} from "../../helpers/formsErrorMessages";

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
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmPassword: ""
    },
    validationSchema: yup.object({
      oldPassword: yup.string().required(OLD_PASSWORD.errorMessage.required),
      newPassword: yup
        .string()
        .required(PASSWORD.errorMessage.required)
        .min(PASSWORD.values.min, PASSWORD.errorMessage.min)
        .max(PASSWORD.values.max, PASSWORD.errorMessage.max)
        .matches(PASSWORD.values.match, PASSWORD.errorMessage.match),
      confirmPassword: yup
        .string()
        .required(CONFIRM_PASSWORD.errorMessage.required)
        .oneOf(
          [yup.ref("newPassword"), null],
          CONFIRM_PASSWORD.errorMessage.testMsg
        )
    }),
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async values => {
    const user = {
      id: session.userId,
      oldPassword: values.oldPassword,
      password: values.newPassword
    };

    await updateSecurity(user).then(resp => {
      if (resp.status === 200) {
        showSuccessAlert({
          message: UserAlerts.success.update_security
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
          message: UserAlerts.error.update_security
        });
      }
    });
  };

  return (
    <>
      <section>
        <h2>Zmień dane dotyczące bezpieczeństwa</h2>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group>
            <Form.Label>Stare hasło:</Form.Label>
            <Form.Control
              id="oldPassword"
              name="oldPassword"
              type="password"
              placeholder="Stare hasło"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.oldPassword}
            />
            {formik.touched.oldPassword && formik.errors.oldPassword ? (
              <Form.Text className="text-danger">
                {formik.errors.oldPassword}
              </Form.Text>
            ) : null}
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Nowe hasło:</Form.Label>
                <Form.Control
                  id="newPassword"
                  name="newPassword"
                  type="password"
                  placeholder="Nowe hasło"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.newPassword}
                />
                {formik.touched.newPassword && formik.errors.newPassword ? (
                  <Form.Text className="text-danger">
                    {formik.errors.newPassword}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Potwierdź nowe hasło:</Form.Label>
                <Form.Control
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Potwierdź nowe hasło"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <Form.Text className="text-danger">
                    {formik.errors.confirmPassword}
                  </Form.Text>
                ) : null}
              </Form.Group>
            </Col>
          </Row>
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
)(UserPasswordChangeForm);
