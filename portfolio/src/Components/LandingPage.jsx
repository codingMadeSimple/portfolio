import React from "react";

// import Navbar from 'react-bootstrap/Navbar';
function LandingPage() {
  return (
    <Container>
      <LandingPage expand="lg" className="bg-body-tertiary">
        <LandingPage.Brand href="/">Colin Spangelo</LandingPage.Brand>
        <Nav>
          <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#experience">Experience</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </LandingPage>
    </Container>
  );
}

export default LandingPage;