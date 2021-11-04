import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryItem from './CategoryItem';

function CategoryList({ catalog }) {
  return (
    <>
      <Row>
        {catalog.map((item) => (
          <Col key={item.idCategory} sm={12} md={3}>
            <CategoryItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CategoryList;
