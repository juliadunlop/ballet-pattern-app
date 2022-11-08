import React, {useEffect, useState} from "react";
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
    counts: "",
    filters:""
  });
  const [combo, setCombo] = useState([]);
  const [count, setCount] = useState(1);
  const [sets, setSet] = useState(1);
  const [comboId, setComboId] = useState([]);
  const [countId, setCountId] = useState([]);
  const [filter, setFilter] = useState([]);

  function handleClick(event) {
    const {name, id, value} = event.target;

    setCombo(prevCombo => {
      return[...prevCombo, [name]]
    });

    setComboId(prevComboId => {
      return[...prevComboId, [id]]
    });
  
    setCountId(prevCountId => {
      return[...prevCountId, [value]]
    });

    if(value === "And") {
      console.log("and");
    } else if (count > 7) {
      setCount(1);
      setSet(sets+1);
    } else {
      setCount(count+1)
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

  function checkboxClick (event) {
    const {id} = event.target;
    console.log([id]);

    setFilter(prevFilter => {
      return[...prevFilter, [id]]
    });
  }


  function submitCombo(event){
    finalCombo.setNum = sets-1;
    finalCombo.content = combo;
    finalCombo.buttonId = comboId;
    finalCombo.counts = countId;
    finalCombo.filters = filter;
    props.submitCard(finalCombo);
    setFinalCombo({
      title: "",
      content: "",
      buttonId: "",
      setNum: "",
      notes: "",
      countId: "",
      filters: "",
    });
    setCombo([]);
    setComboId([]);
    setCountId([]);
    setCount(1);
    setSet(1);
    setFilter([]);
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
    <Form>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        onChange={handleChange} 
        placeholder="Combination Name" 
        value={finalCombo.title} 
        name="title"
        />
    </Form.Group>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <h3>Create</h3>
      
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
                <Button onClick={handleClick} name=" Fifth Front" id="fifthFront" value="Count" variant="outline-secondary">{count}</Button>
              </Col>
              <Col>
                <Button onClick={handleClick} name=" Fifth Front" id="fifthFront" value="And" variant="outline-secondary">And</Button>
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
        placeholder="Combination"
        onChange={handleChange} 
        value={combo} 
        name="content" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control 
        placeholder="Counts"
        onChange={handleChange} 
        value={countId}  />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <h3>Filters</h3>
        <Form.Check inline type="checkbox" label="Beginner" id="beginner" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Intermediate" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Advanced" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Brain Teaser" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Warm Up"  onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="From First" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="From Fifth" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Tendue" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Degage" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Ronde Jambe" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Adagio" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Frappe" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Grande Battement" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Pas de Cheval" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Pike" onClick={checkboxClick}/>
      </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control 
          value={finalCombo.notes} 
          placeholder="Notes" 
          name="notes"
          onChange={handleChange} 
          style={{ height: '100px'}}
          />
      </Form.Group>

      </Modal.Body>

      </Form>
      <Modal.Footer>
        <Button variant="light" onClick={submitCombo}><CheckIcon /></Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal2
