import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function TruncateText({ text, limit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const truncatedText = text.length > limit ? text.substring(0, limit) + '...' : text;

  return (
    <>
      <p onClick={handleModalOpen} style={{ cursor: 'pointer', display: 'inline' }}>
        {truncatedText}
      </p>

      <Modal show={isModalOpen} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Here</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TruncateText;
