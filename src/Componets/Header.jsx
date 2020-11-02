import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const Header = () => {
  return (
    <div>
      <header>
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="lg">
          <Container>
            <LinkContainer to={"/"}>
              <Navbar.Brand>ZS's ToolKit</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
          </Container>
        </Navbar>
      </header>
    </div>
  );
};

export default Header;
