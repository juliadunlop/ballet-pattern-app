import React, {useState} from "react";
import ComboCard from "./ComboCard";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Form } from "react-bootstrap";

function Combinations() {
  const [cards, setCards] = useState([{
    title: "New Combo",
    content:"...",
  }]);
  const [cardFilters, setCardFilters] = useState([]);
  const [viewCards, setViewCards] = useState([]);

  function addCard(newCard) {
    setCards(prevCards => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    setCards(prevCards => {
      return prevCards.filter((cardItem, index) => {
        return index !== id;
      });
    });
  }

  function checkboxClick(event) {
    const {id} = event.target;

    setCardFilters(prevCardFilters => {
      return [...prevCardFilters, [id]];
    });
  }

  return <div>
    <h1 className="titles">Combinations</h1>
    
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Filters</Accordion.Header>
        <Accordion.Body>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check inline type="checkbox" label="Beginner" id="beginner" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Intermediate" id="intermediate" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Advanced" id="advanced" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Brain Teaser" id="brainTeaser" onClick={checkboxClick} />
        <Form.Check inline type="checkbox" label="Warm Up"  id="warmUp" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="From First" id="fromFirst" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="From Fifth" id="fromFifth" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Tendue" id="tendue" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Degage" id="degage" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Ronde Jambe" id="rondeJambe" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Adagio" id="adagio" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Frappe" id="frappe" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Grande Battement" id="grandeBattement" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Pas de Cheval" id="pasDeCheval" onClick={checkboxClick}/>
        <Form.Check inline type="checkbox" label="Pike" id="pike" onClick={checkboxClick}/>
        </Form.Group>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

    <Container>
    <Row xs={1} md={4} className="g-4">
    {cards.map((cardItem, index) => {
      return (
        <ComboCard
          key={index}
          id={index}
          title={cardItem.title}
          content={cardItem.content}
          buttonId={cardItem.buttonId}
          newCard={addCard}
          onDelete={deleteCard}
          setNum={cardItem.setNum}
          notes={cardItem.notes}
          counts={cardItem.counts}
          filters={cardItem.filters}
        />
      );
    })}
    </Row>
    </Container>
    <Container className="centeredContainer">
    </Container>


  </div>
}

export default Combinations;