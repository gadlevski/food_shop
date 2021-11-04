import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function CategoryItem({
  // idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  return (
    <>
      <Card className='my-3 p-3 rounded'>
        <Card.Img variant='top' src={strCategoryThumb} />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{strCategory}</Card.Title>
          <Card.Text>{strCategoryDescription}</Card.Text>
          <Link to={`/category/${strCategory}`}>
            <Button variant='success'>Подробнее</Button>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CategoryItem;
