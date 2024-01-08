import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import Navbar from 'react-bootstrap/Navbar';
function NavBar() {
  return (
    <Container>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navbar.Brand href="/">Colin Spangelo</Navbar.Brand>
        <Nav>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>

      </Navbar>
    </Container>
  );
}

export default NavBar;