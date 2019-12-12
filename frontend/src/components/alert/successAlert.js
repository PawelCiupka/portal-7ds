import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { hideSuccessAlert } from "../../actions/alert";
import { AddAlertIds, RemoveAlertIds } from "../../helpers/alertHelper";

const mapStateToProst = ({ alerts }) => ({
  alerts
});

const mapDispatchToProts = dispatch => ({
  hideSuccessAlert: () => dispatch(hideSuccessAlert())
});

const SuccessAlert = ({ alerts, hideSuccessAlert }) => {
  useEffect(() => {
    const addIds = async () => {
      await AddAlertIds();
    };
    addIds();
  });

  const hide = async () => {
    await RemoveAlertIds();
    await hideSuccessAlert();
  };

  return (
    <>
      <Modal show={alerts.displaySuccessAlert} onHide={hide} id="custom-alert">
        <Modal.Body className="success-alert">
          <Button variant="success" onClick={hide}>
            <Icon name="close" />
          </Button>
          <span>{alerts.message}</span>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default connect(mapStateToProst, mapDispatchToProts)(SuccessAlert);
