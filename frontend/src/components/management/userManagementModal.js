import React, { useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as yup from "yup";
import {} from "../../util/management";
import {
  USERNAME,
  FIRSTNAME,
  LASTNAME,
  EMAIL
} from "../../helpers/formsErrorMessages";
import {
  floorsOptions,
  roomNmbOptions,
  getRoomNmb,
  getFloor
} from "../../helpers/roomList";

const UserManagementModal = props => {
  const [show, setShow] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: props.user.username,
      firstname: props.user.firstname,
      lastname: props.user.lastname,
      floor: getFloor(props.user.room),
      roomNmb: getRoomNmb(props.user.room),
      email: props.user.email,
      password: "",
      comment: props.user.comment
    },
    validationSchema: yup.object({
      username: yup
        .string()
        .required(USERNAME.errorMessage.required)
        .min(USERNAME.values.min, USERNAME.errorMessage.min)
        .max(USERNAME.values.max, USERNAME.errorMessage.max),
      firstname: yup
        .string()
        .required(FIRSTNAME.errorMessage.required)
        .min(FIRSTNAME.values.min, FIRSTNAME.errorMessage.min)
        .max(FIRSTNAME.values.max, FIRSTNAME.errorMessage.max),
      lastname: yup
        .string()
        .required(LASTNAME.errorMessage.required)
        .min(LASTNAME.values.min, LASTNAME.errorMessage.min)
        .max(LASTNAME.values.max, LASTNAME.errorMessage.max),
      email: yup
        .string()
        .required(EMAIL.errorMessage.required)
        .email(EMAIL.errorMessage.email),
      password: yup.string()
    }),
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleClose = () => setShow(false);

  const handleSubmit = values => {
    console.log("handleSubmit: ");
    console.log(values);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Zarządzaj użytkownikiem: {props.user.username}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nazwa użytkownika:</Form.Label>
              <Form.Control
                id="username"
                name="username"
                type="text"
                placeholder="Nazwa użytkownika"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
              />
              {formik.touched.username && formik.errors.username ? (
                <Form.Text className="text-danger">
                  {formik.errors.username}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Imię:</Form.Label>
                  <Form.Control
                    id="firstname"
                    name="firstname"
                    type="text"
                    placeholder="Imię"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <Form.Text className="text-danger">
                      {formik.errors.firstname}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Nazwisko:</Form.Label>
                  <Form.Control
                    id="lastname"
                    name="lastname"
                    type="text"
                    placeholder="Nazwisko"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <Form.Text className="text-danger">
                      {formik.errors.lastname}
                    </Form.Text>
                  ) : null}
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>Piętro:</Form.Label>
                  <Form.Control
                    id="floor"
                    name="floor"
                    as="select"
                    onChange={formik.handleChange}
                    value={formik.values.floor}
                  >
                    {floorsOptions.map(data => (
                      <option key={data.value} value={data.value}>
                        {data.text}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Pokój:</Form.Label>
                  <Form.Control
                    id="roomNmb"
                    name="roomNmb"
                    as="select"
                    onChange={formik.handleChange}
                    value={formik.values.roomNmb}
                  >
                    {roomNmbOptions.map(data => (
                      <option key={data.value} value={data.value}>
                        {data.text}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                id="email"
                name="email"
                type="text"
                placeholder="E-mail"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <Form.Text className="text-danger">
                  {formik.errors.email}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Hasło:</Form.Label>
              <Form.Control
                id="password"
                name="password"
                type="text"
                placeholder="Hasło"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.touched.password && formik.errors.password ? (
                <Form.Text className="text-danger">
                  {formik.errors.password}
                </Form.Text>
              ) : null}
            </Form.Group>
            <Form.Group>
              <Form.Label>Komentarz:</Form.Label>
              <Form.Control
                id="comment"
                name="comment"
                type="text"
                as="textarea"
                rows="3"
                placeholder="Nazwa użytkownika"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.comment}
              />
              {formik.touched.comment && formik.errors.comment ? (
                <Form.Text className="text-danger">
                  {formik.errors.comment}
                </Form.Text>
              ) : null}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" type="submit" onClick={formik.handleSubmit}>
            Zmień
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

UserManagementModal.prototype = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    roomAccess: PropTypes.string.isRequired,
    comment: PropTypes.string.isRequired,
    status: PropTypes.shape({
      name: PropTypes.string.isRequired
    }),
    createdAt: PropTypes.instanceOf(Date).isRequired
  })
};

export default UserManagementModal;
