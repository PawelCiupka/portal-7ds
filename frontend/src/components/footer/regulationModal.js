import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { getRegulations } from "../../util/regulation";

const FooterRegulationModal = props => {
  const [show, setShow] = useState(false);
  const [regulations, setRegulations] = useState(null);

  useEffect(() => {
    getRegulations(props.regulationsSymbol).then(res => {
      setRegulations(res);
    });
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {regulations !== "" && regulations !== null ? (
        <>
          <Button variant="primary" onClick={handleShow}>
            {regulations.title}
          </Button>

          <Modal show={show} onHide={handleClose} className="footer-modal">
            <Modal.Header closeButton>
              <Modal.Title>{regulations.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body
              dangerouslySetInnerHTML={{ __html: regulations.content.html }}
            ></Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>
      ) : null}
    </>
  );
};

export default FooterRegulationModal;
