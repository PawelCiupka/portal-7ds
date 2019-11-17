import React, { useState } from "react";
import { connect } from "react-redux";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as roomHelper from "../../helpers/roomHelper";
import * as roomAccessHelper from "../../helpers/roomAccessHelper";
import * as userStatusHelper from "../../helpers/userStatusHelper";
import * as userRoleHelper from "../../helpers/userRoleHelper";
import { administrationUserDetailsSchema } from "../../helpers/formSchemas/administration/userDetailsSchema";
import FormikTextareaFormGroup from "../formik/textareaFormGroup";
import FormikInputFormGroup from "../formik/inputFormGroup";
import FormikSelectFormGroup from "../formik/selectFormGroup";
import FormikCheckboxFormGroup from "../formik/checkboxFormGroup";
import { formatDate } from "../../helpers/dateFormatter";
import { updateUser } from "../../util/management";
import {
  mapAlertDispatchToProps,
  ManagementAlerts
} from "../alert/alertController";

const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const AdministrationUserDetailsModal = props => {
  const [show, setShow] = useState(true);
  const formik = useFormik({
    initialValues: {
      username: props.user.username,
      firstname: props.user.firstname,
      lastname: props.user.lastname,
      floor: roomHelper.getFloorFromRoom(props.user.room),
      roomNumber: roomHelper.getRoomNumberFromRoom(props.user.room),
      email: props.user.email,
      password: "",
      comment: props.user.comment,
      createdDate: formatDate(props.user.createdAt),
      role: props.user.role._id,
      status: props.user.status._id,
      roomIsGym: roomAccessHelper.isGymAvailable(props.user.roomAccess),
      roomIsBilliards: roomAccessHelper.isBilliardsAvailable(
        props.user.roomAccess
      ),
      roomIsTV: roomAccessHelper.isTVAvailable(props.user.roomAccess),
      roomIsFitness: roomAccessHelper.isFitnessAvailable(props.user.roomAccess),
      roomIsPingPong: roomAccessHelper.isPingPongAvailable(
        props.user.roomAccess
      )
    },
    validationSchema: administrationUserDetailsSchema,
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleClose = () => setShow(false);

  const handleSubmit = async values => {
    const user = {
      id: props.user._id,
      username: values.username,
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      room: values.floor + values.roomNumber,
      password: values.password,
      comment: values.comment,
      role: values.role,
      status: values.status,
      roomAccess: roomAccessHelper.getRoomAccessCode(
        values.roomIsGym,
        values.roomIsBilliards,
        values.roomIsTV,
        values.roomIsFitness,
        values.roomIsPingPong
      )
    };

    await updateUser(user);
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
            <Row>
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
            <Row>
              <Col>
                {FormikSelectFormGroup(
                  "Piętro",
                  "floor",
                  formik,
                  formik.values.floor,
                  roomHelper.getFloorsToSelectFormGroup
                )}
              </Col>
              <Col>
                {FormikSelectFormGroup(
                  "Pokój",
                  "roomNumber",
                  formik,
                  formik.values.roomNumber,
                  roomHelper.getRoomNumbersToSelectFormGroup
                )}
              </Col>
            </Row>
            {FormikInputFormGroup(
              "Hasło",
              "password",
              "text",
              formik,
              formik.values.password,
              formik.touched.password,
              formik.errors.password,
              "Jeśli nie chcesz zmieniać hasła, to pozostaw puste pole"
            )}
            {FormikTextareaFormGroup(
              "Komentarz",
              "comment",
              "text",
              "3",
              formik,
              formik.values.comment,
              formik.touched.comment,
              formik.errors.comment
            )}
            {FormikInputFormGroup(
              "Data utworzenia",
              "createdDate",
              "text",
              formik,
              formik.values.createdDate,
              formik.touched.createdDate,
              formik.errors.createdDate,
              "",
              true
            )}
            {FormikSelectFormGroup(
              "Typ użytkownika",
              "role",
              formik,
              formik.values.role,
              userRoleHelper.getUserRolesToSelectFormGroup
            )}
            {FormikSelectFormGroup(
              "Status",
              "status",
              formik,
              formik.values.status,
              userStatusHelper.getUserStatusesToSelectFormGroup
            )}
            <Row>
              <Col>
                {FormikCheckboxFormGroup(
                  "Siłownia",
                  "roomIsGym",
                  formik,
                  formik.values.roomIsGym
                )}
              </Col>
              <Col>
                {FormikCheckboxFormGroup(
                  "Bilard",
                  "roomIsBilliards",
                  formik,
                  formik.values.roomIsBilliards
                )}
              </Col>
              <Col>
                {FormikCheckboxFormGroup(
                  "Salka TV",
                  "roomIsTV",
                  formik,
                  formik.values.roomIsTV
                )}
              </Col>
              <Col>
                {FormikCheckboxFormGroup(
                  "Fitness",
                  "roomIsFitness",
                  formik,
                  formik.values.roomIsFitness
                )}
              </Col>
              <Col>
                {FormikCheckboxFormGroup(
                  "Ping-Pong",
                  "roomIsPingPong",
                  formik,
                  formik.values.roomIsPingPong
                )}
              </Col>
            </Row>
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

AdministrationUserDetailsModal.prototype = {
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

export default connect(
  null,
  mapDispatchToProps
)(AdministrationUserDetailsModal);
