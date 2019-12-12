import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { hideErrorAlert } from "../../actions/alert";
import { AddAlertIds, RemoveAlertIds } from "../../helpers/alertHelper";

const mapStateToProst = ({ alerts }) => ({
  alerts
});

const mapDispatchToProts = dispatch => ({
  hideErrorAlert: () => dispatch(hideErrorAlert())
});

const ErrorAlert = ({ alerts, hideErrorAlert }) => {
  useEffect(() => {
    const addIds = async () => {
      await AddAlertIds();
    };
    addIds();
  });

  const hide = async () => {
    await RemoveAlertIds();
    await hideErrorAlert();
  };

  return (
    <>
      <Modal show={alerts.displayErrorAlert} onHide={hide} id="custom-alert">
        <Modal.Body className="error-alert">
          <Button variant="danger" onClick={hide}>
            <Icon name="close" />
          </Button>
          <span>{alerts.message}</span>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default connect(mapStateToProst, mapDispatchToProts)(ErrorAlert);
