import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CheckIcon from '@mui/icons-material/Check';
import ViewButtons from './ViewButtons';


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
        <ViewButtons id={id} buttonId={props.buttonId}/>
      </Row>
      <Row>
          <Col><p>Combination:</p></Col>
          <Col>{props.content}</Col>
        </Row>
        <Row>
          <Col><p>Sets of 8:</p></Col>
          <Col>{props.sets}</Col>
        </Row>
        <Row>
          <Col><p>Button Id:</p></Col>
          <Col>{props.buttonId}</Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={props.onHide}><CheckIcon /></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ViewModal