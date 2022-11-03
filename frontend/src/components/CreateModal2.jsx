import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from "react-bootstrap";
import CheckIcon from '@mui/icons-material/Check';

function CreateModal2(props) {
  const [finalCombo, setFinalCombo] = useState({
    title: "",
    content: "",
    buttonId: "",
    setNum: "",
    notes: "",
    category: "",
    counts: ""
  });
  const [combo, setCombo] = useState([]);
  const [count, setCount] = useState(1);
  const [sets, setSet] = useState(1);
  const [comboId, setComboId] = useState([]);
  const [countId, setCountId] = useState([]);

function handleClick(event) {
  const {name, id, value} = event.target;
  if(count > 7) {
    setCount(1);
    setSet(sets+1);
    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });

    setComboId(prevComboId => {
        return[...prevComboId, [id]]
      });
    
      setCountId(prevCountId => {
        return[...prevCountId, [value]]
      });

  
  } else {

    setCount(count+1)

    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });

    setComboId(prevComboId => {
      return[...prevComboId, [id]]
    });

    setCountId(prevCountId => {
      return[...prevCountId, [value]]
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
    finalCombo.counts = countId;
    props.submitCard(finalCombo);
    setFinalCombo({
      title: "",
      content: "",
      buttonId: "",
      setNum: "",
      notes: "",
      category: "",
      countId: ""
    });
    setCombo([]);
    setComboId([]);
    setCountId([]);
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
      </Row>
      
      <Row className="row" >
      <Col></Col>
      <Col>
        <Row>
          <Row className="row" >
            <Col></Col>
            <Col className="textHeading align-items-center justify-content-center">
              <h5> Front </h5>
            </Col>
            <Col> </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={handleClick} name=" Front" id="front" value="Count" variant="outline-secondary">{count}</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} name=" Front" id="front" value="And" variant="outline-secondary">And</Button>
            </Col>
          </Row>
        </Row>
      </Col>
      <Col> 
        <h5> Set = {sets} </h5>
        <h5> Next Count = {count} </h5>
      </Col>
      </Row>

      <Row>
        <Col>
          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> Inside </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" Inside" id="inside" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Inside" id="inside" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>
        </Col>

        <Col>
          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> Fifth Front </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" Fifth Front" id="Front" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Fifth Front" id="Front" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>

          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> First </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" First" id="first" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" First" id="first" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>

          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> Fifth Back </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" Fifth Back" id="fifthBack" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Fifth Back" id="fifthBack" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>
        </Col>


        <Col>
          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> Side </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" Side" id="side" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Side" id="side" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>
        </Col>
      </Row>
     
      <Row>
        <Col> </Col>
        <Col>
          <Row>
            <Row className="row" >
              <Col></Col>
              <Col className="textHeading align-items-center justify-content-center">
                <h5> Back </h5>
              </Col>
              <Col> </Col>
            </Row>
            <Row>
              <Col>
                <Button onClick={handleClick} name=" Back" id="back" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Back" id="back" value="And" variant="outline-secondary">And</Button>
              </Col>
            </Row>
          </Row>
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
        value={countId}  />
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

export default CreateModal2