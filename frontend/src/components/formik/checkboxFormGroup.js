import React from "react";
import { Form } from "react-bootstrap";

const FormikCheckboxFormGroup = (
  label,
  uniqueName,
  formik,
  formikValue,
  comment = "",
  isDisabled = false
) => {
  return (
    <>
      <Form.Group>
        <Form.Check
          label={label}
          id={uniqueName}
          name={uniqueName}
          type="checkbox"
          onChange={formik.handleChange}
          value={formikValue}
          disabled={isDisabled}
        />
        {comment !== "" ? <Form.Text>{comment}</Form.Text> : null}
      </Form.Group>
    </>
  );
};

export default FormikCheckboxFormGroup;
