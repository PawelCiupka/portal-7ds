import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { updateInformation } from "../../util/user";
import { mapAlertDispatchToProps, UserAlerts } from "../alert/alertController";
import { userManagementDataChangeSchema } from "../../helpers/formSchemas/userManagement/dataChangeSchema";
import FormikInputFormGroup from "../formik/inputFormGroup";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserManagementDataChangeForm = ({
  session,
  showSuccessAlert,
  showErrorAlert
}) => {
  const formik = useFormik({
    initialValues: {
      username: session.username,
      firstname: session.firstname,
      lastname: session.lastname,
      email: session.email
    },
    validationSchema: userManagementDataChangeSchema,
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
        <h5>Dane osobowe</h5>
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
          <Row className="row-no-row">
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
)(UserManagementDataChangeForm);
