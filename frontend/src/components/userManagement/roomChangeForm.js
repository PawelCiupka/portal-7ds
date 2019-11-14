import React from "react";
import { connect } from "react-redux";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useFormik } from "formik";
import * as roomHelper from "../../helpers/roomHelper";
import { sendChangeRoomTicket } from "../../util/ticket";
import {
  mapAlertDispatchToProps,
  TicketAlerts
} from "../alert/alertController";
import FormikSelectFormGroup from "../formik/formikSelectFormGroup";

const mapStateToProps = ({ session }) => ({
  session
});
const mapDispatchToProps = Object.assign(mapAlertDispatchToProps);

const UserRoomChangeForm = ({ session, showSuccessAlert, showErrorAlert }) => {
  const formik = useFormik({
    initialValues: {
      floor: roomHelper.getFloorFromRoom(session.room),
      roomNumber: roomHelper.getRoomNumberFromRoom(session.room)
    },
    onSubmit: values => {
      handleSubmit(values);
    }
  });

  const handleSubmit = async values => {
    const ticket = {
      userId: session.userId,
      username: session.username,
      firstname: session.firstname,
      lastname: session.lastname,
      oldRoom: session.room,
      newRoom: values.floor + values.roomNumber
    };

    await sendChangeRoomTicket(ticket).then(resp => {
      if (resp.status === 200) {
        showSuccessAlert({
          message: TicketAlerts.success.change_room
        });
      } else {
        showErrorAlert({
          message: TicketAlerts.error.change_room
        });
      }
    });
  };

  return (
    <>
      <section>
        <h2>Wyślij prośbę o zmianę pokoju </h2>
        <Form onSubmit={formik.handleSubmit}>
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
          <Button variant="primary" type="submit">
            Wyślij prośbę
          </Button>
        </Form>
      </section>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRoomChangeForm);
