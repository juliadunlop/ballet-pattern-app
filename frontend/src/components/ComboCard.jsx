import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateModal from "./CreateModal"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ViewModal from "./ViewModal";


function ComboCard(props) {
  const cardId = props.id;
  const [modalShow, setModalShow] = React.useState(false);

  function handleClick() {
    props.onDelete(cardId);
  }

  return (
    <Col>
    <Card border="primary" style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
      {cardId === 0 ? "" :
        <Button variant="primary" onClick={handleClick}>
          Delete
      </Button>
      }
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        <Row>
          <Col><p>Combination:</p></Col>
          <Col><p className="textOverflow">{props.content}</p></Col>
        </Row>
          <Col>Sets of 8:</Col>
          <Col>{props.setNum}</Col>
        </Card.Text>
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}> {cardId === 0 ? "New Combo" : "View Combo"}
      </Button>
      {cardId === 0 ? 
      <CreateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        submitCard = {props.newCard}
      />
      :
      <ViewModal
        title={props.title}
        content={props.content}
        sets={props.setNum}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      }
    </>
       
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ComboCard