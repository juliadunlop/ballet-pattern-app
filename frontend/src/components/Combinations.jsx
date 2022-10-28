import React, {useState} from "react";
import ComboCard from "./ComboCard";
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

function Combinations() {
  const [cards, setCards] = useState([{
    title: "New Combo",
    content:"...",
  }]);

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

  return <div>
    <h1 className="titles">Combinations</h1>
    <Container>
    <Row xs={1} md={4} className="g-4">
    {cards.map((cardItem, index) => {
      return (
        <ComboCard
          key={index}
          id={index}
          title={cardItem.title}
          content={cardItem.content}
          newCard={addCard}
          onDelete={deleteCard}
          setNum={cardItem.setNum}
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