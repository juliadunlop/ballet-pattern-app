import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateModal from "./CreateModal"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ViewModal from "./ViewModal";
import '../custom.scss';
import ViewButtons from './ViewButtons';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function ComboCard(props) {
  const cardId = props.id;

  const [modalShow, setModalShow] = React.useState(false);

  function handleClick() {
    props.onDelete(cardId);
  }

  return (
    <Col>
    <Card>
      <Card.Body>
      <ViewButtons id={cardId} buttonId={props.buttonId}/>
      <Card.Title><h2>{props.title}</h2></Card.Title>
    <>
    <Row>
      <Col>
        <Button variant="light" onClick={() => setModalShow(true)}> {cardId === 0 ? <AddIcon /> : "View"}
        </Button></Col>
      <Col className="align-items-end">{cardId === 0 ? "" :
        <Button variant="light" onClick={handleClick}>
        <DeleteIcon />
      </Button>
      }</Col>
      </Row>
      {cardId === 0 ? 
      <CreateModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        submitCard = {props.newCard}
      />
      :
      <ViewModal
        id={cardId}
        title={props.title}
        content={props.content}
        buttonId={props.buttonId}
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