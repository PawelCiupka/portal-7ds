import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const FormikSelectNoLabelFormGroup = (
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
        <Form.Control
          id={uniqueName}
          name={uniqueName}
          defaultValue="0"
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

export default FormikSelectNoLabelFormGroup;
