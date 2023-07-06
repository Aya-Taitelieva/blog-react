import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";

const AddBlog = () => {
  const [card, setCard] = useState([]);
  async function getCard() {
    const { data } = await axios(" https://jsonplaceholder.typicode.com/posts");
    setCard(data);
  }
  useEffect(() => {
    getCard();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "40px",
        rowGap: "20px",
      }}>
      {card.map((item) => (
        <div>
          <Card
            border="dark"
            style={{
              width: "18rem",
              height: "300px",
            }}>
            <Card.Header></Card.Header>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default AddBlog;
