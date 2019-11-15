import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const FormikSelectFormGroup = (
  label,
  uniqueName,
  formik,
  formikValue,
  getOptions,
  comment = "",
  isDisabled = false
) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const prepareOptions = async () => {
      setOptions(await getOptions());
    };
    prepareOptions();
  }, []);

  return (
    <>
      <Form.Group>
        <Form.Label>{label}:</Form.Label>
        <Form.Control
          id={uniqueName}
          name={uniqueName}
          as="select"
          onChange={formik.handleChange}
          value={formikValue}
          disabled={isDisabled}
        >
          {options.length > 0
            ? options.map(data => (
                <option key={data.key} value={data.value}>
                  {data.text}
                </option>
              ))
            : null}
        </Form.Control>
        {comment !== "" ? <Form.Text>{comment}</Form.Text> : null}
      </Form.Group>
    </>
  );
};

export default FormikSelectFormGroup;
