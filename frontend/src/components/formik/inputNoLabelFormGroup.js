import React from "react";
import { Form } from "react-bootstrap";

const FormikInputNoLabelFormGroup = (
  label,
  uniqueName,
  inputType,
  formik,
  formikValue,
  formikTouched,
  formikErrors,
  comment = "",
  isDisabled = false,
  formGroupClassName = ""
) => {
  return (
    <>
      <Form.Group className={formGroupClassName}>
        <Form.Control
          id={uniqueName}
          name={uniqueName}
          type={inputType}
          placeholder={label}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formikValue}
          disabled={isDisabled}
        />
        {comment !== "" ? <Form.Text>{comment}</Form.Text> : null}
        {formikTouched && formikErrors ? (
          <Form.Text>{formikErrors}</Form.Text>
        ) : null}
      </Form.Group>
    </>
  );
};

export default FormikInputNoLabelFormGroup;
