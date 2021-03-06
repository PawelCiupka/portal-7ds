import React from "react";
import { Form } from "react-bootstrap";

const FormikTextareaFormGroup = (
  label,
  uniqueName,
  inputType,
  rowsNumber,
  formik,
  formikValue,
  formikTouched,
  formikErrors,
  comment,
  isDisabled = false
) => {
  return (
    <>
      <Form.Group>
        <Form.Label>{label}:</Form.Label>
        <Form.Control
          id={uniqueName}
          name={uniqueName}
          type={inputType}
          as="textarea"
          rows={rowsNumber}
          placeholder={label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formikValue}
          disabled={isDisabled}
        />
        {comment !== "" ? <Form.Text>{comment}</Form.Text> : null}
        {formikTouched && formikErrors ? (
          <Form.Text className="text-danger">{formikErrors}</Form.Text>
        ) : null}
      </Form.Group>
    </>
  );
};

export default FormikTextareaFormGroup;
