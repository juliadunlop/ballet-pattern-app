import React from "react";
import Box from '@mui/material/Box';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function ViewButtons(props) {
const frontId = "front" + props.id;
const sideId = "side" + props.id;
const insideId = "inside" + props.id;
const firstId = "first" + props.id;
const backId = "back" + props.id;

    function playCombo(){
        const combination = props.buttonId;
        for (let num = 0; num < combination.length; num++){
            console.log(combination[num]);
            //document.getElementById(combination[num]).style.background="#000000";
            setTimeout(function(){
                document.getElementById(combination[num]+props.id).style.background="#000000";
                }, 1000*num);
            setTimeout(function(){
                document.getElementById(combination[num]+props.id).style.background="#fff";
                }, 1000 * num + 500);
         }
    }

    return (
      <Container>
         <Row className="row" >
      <Col></Col>
        <Col className="textHeading">
         <Button variant="light" id={frontId}>Front</Button>
        </Col>
        <Col></Col> 
      </Row>

      <Row>
      <Col className="textHeading">
        <Button variant="light" id={insideId}>Inside</Button>
      </Col>
      <Col className="textHeading">
        <Row> <Button variant="light" id={firstId}>First</Button></Row>
      </Col>
      <Col className="textHeading">
        <Button variant="light" id={sideId}>Side</Button>
      </Col>
      </Row>
     
      <Row>
        <Col> </Col>
        <Col className="textHeading">
          <Button variant="light" id={backId}>Back</Button>
        </Col>
        <Col></Col>
      </Row>
      <Row></Row>
      <Row>
      <Button variant="primary" onClick={playCombo}>Play</Button>
      </Row>
      </Container>
    );
  }

export default ViewButtons;