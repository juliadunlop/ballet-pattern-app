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
        const count = props.counts;
        console.log(count);
        for (let num = 0; num < combination.length; num++){
          setTimeout(function(){
            document.getElementById(combination[num]+props.id).style.background="#000000";
            }, 1000*num);
          if(count[num] == "And" || count[num+1] == "And"){
            setTimeout(function(){
              document.getElementById(combination[num]+props.id).style.background="#fff";
              console.log("count off");
              }, 1000 * num + 250);
          } else {
            setTimeout(function(){
              document.getElementById(combination[num]+props.id).style.background="#fff";
              console.log("and off");
              }, 1000 * num + 500);
          }
         }
    }

    return (
      <Container>
         <Row className="row" >
      <Col></Col>
        <Col className="textHeading align-items-center">
         <Button variant="light" id={frontId}>Front</Button>
        </Col>
        <Col></Col> 
      </Row>

      <Row>
      <Col className="textHeading">
        <Button variant="light" id={insideId}>Inside</Button>
      </Col>
      <Col className="textHeading">
        <Row><Button variant="light" id={firstId}>Fifth Front</Button></Row>
        <Row><Button variant="light" id={firstId}>First</Button></Row>
        <Row><Button variant="light" id={firstId}>Fifth Back</Button></Row>
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


// function playCombo(){
//   const combination = props.buttonId;
//   const count = props.counts;
//   console.log(count);
//   for (let num = 0; num < combination.length; num++){
//     if(count[num] == "Count"){
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#000000";
//         console.log(combination[num]+props.id);
//         console.log("count on");
//         }, 1000*num);
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#fff";
//         console.log("count off");
//         }, 1000 * num + 500);
//     } else {
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#000000";
//         console.log(combination[num]+props.id);
//         console.log("and on");
//         }, 1000*num);
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#fff";
//         console.log("and off");
//         }, 1000 * num + 250);
//     }
//    }
// }




// function playCombo(){
//   const combination = props.buttonId;
//   const count = props.counts;
//   console.log(count);
//   for (let num = 0; num < combination.length; num++){
//     setTimeout(function(){
//       document.getElementById(combination[num]+props.id).style.background="#000000";
//       }, 1000*num);
//     if(count[num] == "And" || count[num+1] == "And"){
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#fff";
//         console.log("count off");
//         }, 1000 * num + 250);
//     } else {
//       setTimeout(function(){
//         document.getElementById(combination[num]+props.id).style.background="#fff";
//         console.log("and off");
//         }, 1000 * num + 500);
//     }
//    }
// }