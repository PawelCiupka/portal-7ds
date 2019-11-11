import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import {} from "../../util/management";

const UserManagementModal = props => {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Elówa {props.user.username}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.user.createdAt}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
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
