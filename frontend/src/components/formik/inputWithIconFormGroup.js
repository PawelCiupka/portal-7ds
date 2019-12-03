import React from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Icon } from "semantic-ui-react";

const FormikInputWithIconFormGroup = (
  label,
  uniqueName,
  inputType,
  iconName,
  formik,
  formikValue,
  formikTouched,
  formikErrors,
  comment = "",
  isDisabled = false
) => {
  return (
    <>
      <Form.Group>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>
              <Icon name={iconName} />
            </InputGroup.Text>
          </InputGroup.Prepend>
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
        </InputGroup>
      </Form.Group>
    </>
  );
};

export default FormikInputWithIconFormGroup;
