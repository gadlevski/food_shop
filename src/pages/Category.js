import React, { useEffect, useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import MealList from '../components/MealList';
import Preloader from '../components/Preloader';

function Category() {
  const [meals, setMeals] = useState([]);
  const { nameCategory } = useParams();
  const { goBack } = useHistory();

  useEffect(() => {
    getFilteredCategory(nameCategory).then((data) => setMeals(data.meals));
  }, [nameCategory]);
  return (
    <>
      <Container>
        <Button className='mt-3' onClick={goBack}>
          Назад
        </Button>
        {!meals.length ? <Preloader /> : <MealList meals={meals} />}
      </Container>
    </>
  );
}

export default Category;
