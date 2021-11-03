import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CategoryItem from './CategoryItem';

function CategoryList({ catalog }) {
  return (
    <>
      <Row>
        {catalog.map((item) => (
          <Col sm={12} md={3}>
            <CategoryItem key={item.idCategory} {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default CategoryList;
