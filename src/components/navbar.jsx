import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet, Link} from "react-router-dom";
const Navigation = () =>{
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand> 
            <Link className='link' to="/">Todo</Link> 
            </Navbar.Brand>
          <Nav className="me-auto">
            <Link className='mx-2 link' to="/">Главная</Link> 
            <Link className='mx-2 link' to="/panel">Админ Панель</Link>
          </Nav>
        </Container>
      </Navbar>
      <Outlet/>
    </>
  );
}

export default Navigation;