import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CreateModal2 from "./CreateModal2"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ViewModal from "./ViewModal";
import '../custom.scss';
import ViewButtonsAnd from './ViewButtonsAnd';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';

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
      {props.id===0 ? <Box
        sx={{
          width: 270,
          height: 200,
          backgroundColor: 'primary.dark',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}/>
      :
      <ViewButtonsAnd id={cardId} buttonId={props.buttonId} counts={props.counts}/>
      }
      
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
      <CreateModal2
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
        notes={props.notes}
        counts={props.counts}
        show={modalShow}
        onHide={() => setModalShow(false)}
        filters={props.filters}
      />
      }
    </>
       
      </Card.Body>
    </Card>
    </Col>
  );
}

export default ComboCard