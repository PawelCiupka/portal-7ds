import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hideErrorAlert } from "../../actions/alert";

const mapStateToProst = ({ alerts }) => ({
  alerts
});

const mapDispatchToProts = dispatch => ({
  hideErrorAlert: () => dispatch(hideErrorAlert())
});

const ErrorAlert = ({ alerts, hideErrorAlert }) => {
  return (
    <>
      <Modal show={alerts.displayErrorAlert} onHide={hideErrorAlert}>
        <Modal.Body>{alerts.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={hideErrorAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(mapStateToProst, mapDispatchToProts)(ErrorAlert);
