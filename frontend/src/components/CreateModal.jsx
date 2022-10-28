import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { Form } from "react-bootstrap";

function CreateModal(props) {
  const [finalCombo, setFinalCombo] = useState({
    title: "",
    content: "",
    link: "/",
    linkTitle: "View",
    setNum:""
  });
  const [combo, setCombo] = useState([]);
  const [count, setCount] = useState(1);
  const [sets, setSet] = useState(1);

function handleClick(event) {
  const {name} = event.target;
  if(count > 7) {
    setCount(1);
    setSet(sets+1)
    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });
  } else {
    setCount(count+1)
    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });
  }
  }

  function handleChange(event) {
    const {name,value} = event.target;

    setFinalCombo(prevfinalCombo => {
      return{
        ...prevfinalCombo,
        [name]: value
      };
    });
  }

  function submitCombo(event){
    finalCombo.setNum = sets-1;
    finalCombo.content = combo;
    props.submitCard(finalCombo);
    setFinalCombo({
      title: "",
      content: "",
      link: "/",
      setNum: ""
    });
    setCombo([]);
    setCount(1);
    setSet(1);
    props.onHide();
    event.preventDefault();
  }
    
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New Combination
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form> 
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        placeholder="Combination Name" 
        value={finalCombo.title} 
        name="title"
        />
    </Form.Group>

      <Row className="row" >
      <Col></Col>
        <Col className="textHeading">
         <Button onClick={handleClick} name="Front">Front</Button>
        </Col>
        <Col> 
        <h5> Set = {sets} </h5>
        <h5> Next Count = {count} </h5>
        </Col>
      </Row>

      <Row>
      <Col className="textHeading">
        <Button onClick={handleClick} name="Inside">Inside</Button>
      </Col>
      <Col className="textHeading">
        <Row> <Button onClick={handleClick} name="Fifth Front">Fifth Front</Button></Row>
        <Row> <Button onClick={handleClick} name="First">First</Button></Row>
        <Row> <Button onClick={handleClick} name="Fifth Back">Fifth Back</Button></Row>
      </Col>
      <Col className="textHeading">
        <Button onClick={handleClick} name="Side">Side</Button>
      </Col>
      </Row>
     
      <Row>
        <Col> </Col>
        <Col className="textHeading">
          <Button onClick={handleClick} name="Back">Back</Button>
        </Col>
        <Col></Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        value={combo} 
        name="content" />
      </Form.Group>

    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={submitCombo}>Submit</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal