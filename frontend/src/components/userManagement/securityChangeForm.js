import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { updateSecurity } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";
import { userManagementSecurityChangeSchema } from "../../helpers/formSchemas/userManagement/securityChangeSchema";
import FormikInputFormGroup from "../formik/inputFormGroup";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserManagementSecurityChangeForm = ({
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
    validationSchema: userManagementSecurityChangeSchema,
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
        <h5>Dane dotyczące bezpieczeństwa</h5>
        <Form onSubmit={formik.handleSubmit}>
          {FormikInputFormGroup(
            "Stare hasło",
            "oldPassword",
            "password",
            formik,
            formik.values.oldPassword,
            formik.touched.oldPassword,
            formik.errors.oldPassword
          )}
          <Row className="row-no-row">
            <Col>
              {FormikInputFormGroup(
                "Nowe hasło",
                "newPassword",
                "password",
                formik,
                formik.values.newPassword,
                formik.touched.newPassword,
                formik.errors.newPassword
              )}
            </Col>
            <Col>
              {FormikInputFormGroup(
                "Potwierdź nowe hasło",
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
)(UserManagementSecurityChangeForm);
