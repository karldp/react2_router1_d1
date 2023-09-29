import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Cards = ({image, title, description, buttoncolor}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant={buttoncolor}>Buy</Button>
      </Card.Body>
    </Card>
  )
}

export default Cards