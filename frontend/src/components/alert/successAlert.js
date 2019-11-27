import React from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { hideSuccessAlert } from "../../actions/alert";

const mapStateToProst = ({ alerts }) => ({
  alerts
});

const mapDispatchToProts = dispatch => ({
  hideSuccessAlert: () => dispatch(hideSuccessAlert())
});

const SuccessAlert = ({ alerts, hideSuccessAlert }) => {
  return (
    <>
      <Modal show={alerts.displaySuccessAlert} onHide={hideSuccessAlert}>
        <Modal.Body>{alerts.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={hideSuccessAlert}>
            Zamknij
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default connect(mapStateToProst, mapDispatchToProts)(SuccessAlert);
