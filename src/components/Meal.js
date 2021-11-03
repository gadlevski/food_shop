import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Meal({ idMeal, strMeal, strMealThumb }) {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Img variant='top' src={strMealThumb} />
        <Card.Body className='d-flex flex-column'>
          <Card.Text>{strMeal}</Card.Text>
          <Link to={`/meal/${idMeal}`}>
            <Button variant='success'>Посмотреть рецепт</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default Meal;
