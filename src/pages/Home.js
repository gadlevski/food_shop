import React, { useState, useEffect } from 'react';
import { getAllCategories } from '../api';
import Preloader from '../components/Preloader';
import CategoryList from '../components/CategoryList';
import { Container } from 'react-bootstrap';

function Home() {
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCatalog(data.categories);
    });
  }, []);
  return (
    <>
      <Container>
        {!catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}
      </Container>
    </>
  );
}

export default Home;
