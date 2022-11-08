import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CheckIcon from '@mui/icons-material/Check';
import ViewButtonsAnd from './ViewButtonsAnd';


function ViewModal(props) {
  const viewId = "view"
  const id = props.id + viewId;

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Row>
        <ViewButtonsAnd id={id} buttonId={props.buttonId} counts={props.counts}/>
      </Row>
      <Row>
          <p>Combination: {props.content}</p>
        </Row>
        <Row>
          <p>Sets of 8: {props.sets}</p>
        </Row>
        <Row>
          <p>Notes: {props.buttonId}</p>
        </Row>
        <Row>
          <p>Counts: {props.counts}</p>
        </Row>
        <Row>
          <p>Filters: {props.filters}</p>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}><CheckIcon /></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewModal