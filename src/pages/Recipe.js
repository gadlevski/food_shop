import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row, Table } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { getMealById } from '../api';
import Preloader from '../components/Preloader';

function Recipe() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const { goBack } = useHistory();

  useEffect(() => {
    getMealById(id).then((data) => setRecipe(data.meals[0]));
  }, [id]);

  // console.log(recipe);

  // Object.keys(recipe).map((key) => {
  //   // if (key.includes('Ingridient') && recipe[key]) {
  //   // }
  //   // console.log(key);
  //   // console.log(recipe);
  //   // console.log(recipe[key]);
  //   // console.log(recipe.key);
  //   return true;
  // });
  return (
    <>
      <Container>
        <Row className='d-flex align-items-center justify-content-center'>
          <Col sm={6}>
            <Button className='mt-3' onClick={goBack}>
              Назад
            </Button>
            {!recipe.idMeal ? (
              <Preloader />
            ) : (
              <>
                <Card className='my-3 p-3 rounded'>
                  <Card.Img variant='top' src={recipe.strMealThumb} />
                  <Card.Body className='d-flex flex-column'>
                    <Card.Text>{recipe.strInstructions}</Card.Text>
                    {recipe.strYoutube && (
                      <iframe
                        src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                          -11
                        )}`}
                        title='YouTube video player'
                        // allowFullScreen
                      ></iframe>
                    )}
                  </Card.Body>
                </Card>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Ингридиент</th>
                      <th>Количество</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(recipe).map((key) => {
                      if (key.includes('Ingredient') && recipe[key]) {
                        return (
                          <tr key={key}>
                            <td>{recipe[key]}</td>
                            <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                          </tr>
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </Table>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Recipe;
