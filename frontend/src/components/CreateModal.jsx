import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import CheckIcon from '@mui/icons-material/Check';

function CreateModal(props) {
  const [finalCombo, setFinalCombo] = useState({
    title: "",
    content: "",
    buttonId: "",
    setNum:""
  });
  const [combo, setCombo] = useState([]);
  const [count, setCount] = useState(1);
  const [sets, setSet] = useState(1);
  const [comboId, setComboId] = useState([]);

function handleClick(event) {
  const {name, id} = event.target;
  if(count > 7) {
    setCount(1);
    setSet(sets+1);
    setCombo(prevCombo => {
      return[...prevCombo, event.target.name]
    });

    setComboId(prevComboId => {
        return[...prevComboId, event.target.id]
      });

  
  } else {

    setCount(count+1)

    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });

    setComboId(prevComboId => {
      return[...prevComboId, [id]]
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
    finalCombo.buttonId = comboId;
    props.submitCard(finalCombo);
    setFinalCombo({
      title: "",
      content: "",
      setNum: "",
      buttonId: ""
    });
    setCombo([]);
    setComboId([])
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
         <Button onClick={handleClick} name=" Front" id="front">Front</Button>
        </Col>
        <Col> 
        <h5> Set = {sets} </h5>
        <h5> Next Count = {count} </h5>
        </Col>
      </Row>

      <Row>
      <Col className="textHeading">
        <Button onClick={handleClick} name=" Inside" id="inside">Inside</Button>
      </Col>
      <Col className="textHeading">
        <Row> <Button onClick={handleClick} name=" Fifth Front" id="fifthfront">Fifth Front</Button></Row>
        <Row> <Button onClick={handleClick} name=" First" id="first">First</Button></Row>
        <Row> <Button onClick={handleClick} name=" Fifth Back"id="fifthback">Fifth Back</Button></Row>
      </Col>
      <Col className="textHeading">
        <Button onClick={handleClick} name="Side " id="side">Side</Button>
      </Col>
      </Row>
     
      <Row>
        <Col> </Col>
        <Col className="textHeading">
          <Button onClick={handleClick} name=" Back" id="back">Back</Button>
        </Col>
        <Col></Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        value={combo} 
        name="content" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        value={comboId} 
        name="buttonId" />
      </Form.Group>

    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={submitCombo}><CheckIcon /></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal