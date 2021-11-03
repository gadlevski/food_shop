import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealList from '../components/MealList';
import Preloader from '../components/Preloader';

function Category() {
  const [meals, setMeals] = useState([]);
  const { nameCategory } = useParams();

  useEffect(() => {
    getFilteredCategory(nameCategory).then((data) => setMeals(data.meals));
  }, [nameCategory]);
  return (
    <>
      <Container>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      </Container>
    </>
  );
}

export default Category;
