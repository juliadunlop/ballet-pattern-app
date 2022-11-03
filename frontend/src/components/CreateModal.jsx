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
    setNum:"",
    notes:"",
    category:"",
    counts:""
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
      buttonId: "",
      setNum:"",
      notes:"",
      category:"",
      counts:""
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
      <Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        placeholder="Combination Name" 
        value={finalCombo.title} 
        name="title"
        />
    </Form.Group>
      </Row>
      
      <Row >
        <Col>
          <Form.Select aria-label="Category" value={finalCombo.category} onChange={handleChange} name="category" >
            <option>Combination Category</option>
            <option value="1">Tendue from First</option>
            <option value="2">Tendue from Fifth</option>
            <option value="3">Degage</option>
          </Form.Select>
        </Col>
        <Col>
          <Form.Select aria-label="tyle" value={finalCombo.counts} onChange={handleChange} name="counts" >
            <option>Count Style</option>
            <option value="on Count">Count</option>
            <option value="On And">And</option>
            <option value="On And-A">And A</option>
          </Form.Select>
        </Col>
      </Row>

      <Row className="row" >
      <Col></Col>
        <Col className="textHeading align-items-center justify-content-center">
         <Button onClick={handleClick} name=" Front" id="front" variant="outline-secondary">Front</Button>
        </Col>
        <Col> 
        <h5> Set = {sets} </h5>
        <h5> Next Count = {count} </h5>
        </Col>
      </Row>

      <Row>
      <Col className="textHeading">
        <Button onClick={handleClick} name=" Inside" id="inside" variant="outline-secondary">Inside</Button>
      </Col>
      <Col className="textHeading">
        <Row> <Button onClick={handleClick} name=" Fifth Front" id="fifthfront" variant="outline-secondary">Fifth Front</Button></Row>
        <Row> <Button onClick={handleClick} name=" First" id="first" variant="outline-secondary">First</Button></Row>
        <Row> <Button onClick={handleClick} name=" Fifth Back"id="fifthback" variant="outline-secondary">Fifth Back</Button></Row>
      </Col>
      <Col className="textHeading">
        <Button onClick={handleClick} name=" Side" id="side" variant="outline-secondary">Side</Button>
      </Col>
      </Row>
     
      <Row>
        <Col> </Col>
        <Col className="textHeading">
          <Button onClick={handleClick} name=" Back" id="back" variant="outline-secondary">Back</Button>
        </Col>
        <Col></Col>
      </Row>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        value={combo} 
        name="content" />
      </Form.Group>

      <Row>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
          value={finalCombo.notes} 
          placeholder="Notes" 
          name="notes"
          onChange={handleChange} 
          />
        </Form.Group>
      </Row>

    </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={submitCombo}><CheckIcon /></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal