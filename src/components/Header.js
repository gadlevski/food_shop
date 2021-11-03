import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>React shop</Navbar.Brand>

          <Nav>
            <Link to='/about'>О нас</Link>
            <Link to='/contacts'>Контакты</Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
