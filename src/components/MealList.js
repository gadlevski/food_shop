import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Meal from './Meal';

function MealList({ meals }) {
  return (
    <>
      <Row>
        {meals.map((item) => (
          <Col sm={12} md={3} key={item.idMeal}>
            <Meal {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default MealList;
