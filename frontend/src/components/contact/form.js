import React from "react";
import { connect } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { mapAlertDispatchToProps, MailAlerts } from "../alert/alertController";
import FormikInputFormGroup from "../formik/inputFormGroup";
import { mailFromSchema } from "../../helpers/formSchemas/contact/mailFormSchema";
import FormikTextareaFormGroup from "../formik/textareaFormGroup";
import {
  SUBJECT,
  MESSAGE
} from "../../helpers/formSchemas/config/contactConfigVariables";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const ContactForm = props => {
  const formik = useFormik({
    initialValues: {
      subject: "",
      message: ""
    },
    validationSchema: mailFromSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async values => {
    const data = {
      id: props.session.userId,
      firstname: props.session.firstname,
      lastname: props.session.lastname,
      room: props.session.room,
      email: props.session.email,
      subject: values.subject,
      message: values.message
    };

    await props.sendMailFunc(data).then(resp => {
      if (resp.status === 200) {
        props.showSuccessAlert({
          message: MailAlerts.success.mail_send
        });
      } else {
        props.showErrorAlert({
          message: MailAlerts.error.mail_send
        });
      }
    });
  };

  return (
    <>
      <section>
        <Form onSubmit={formik.handleSubmit}>
          {FormikInputFormGroup(
            "Temat",
            "subject",
            "text",
            formik,
            formik.values.subject,
            formik.touched.subject,
            formik.errors.subject
          )}
          <p className="letters-counter">
            {String(formik.values.subject).length} / {SUBJECT.values.max}
          </p>
          {FormikTextareaFormGroup(
            "Wiadomość",
            "message",
            "text",
            "4",
            formik,
            formik.values.message,
            formik.touched.message,
            formik.errors.message
          )}
          <p className="letters-counter">
            {String(formik.values.message).length} / {MESSAGE.values.max}
          </p>
          <Button variant="primary" type="submit">
            Wyślij
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
