import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hideSuccessfulAlert } from "../../actions/alert";

const mapStateToProst = ({ alerts }) => ({
  alerts
});

const mapDispatchToProts = dispatch => ({
  hideSuccessfulAlert: () => dispatch(hideSuccessfulAlert())
});

const SuccessfulAlert = ({ alerts, hideSuccessfulAlert }) => {
  return (
    <>
      <Modal show={alerts.display} onHide={hideSuccessfulAlert}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{alerts.msg}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={hideSuccessfulAlert}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(
  mapStateToProst,
  mapDispatchToProts
)(SuccessfulAlert);
