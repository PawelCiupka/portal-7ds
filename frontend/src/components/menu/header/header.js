import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import UserDropdown from "./userDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="#home">7DS</Navbar.Brand>
        <UserDropdown />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Strona główna</Nav.Link>
            <Nav.Link href="/dashboard/room-reservation/menu">Salki</Nav.Link>
            <Nav.Link href="/dashboard/management">Administracja</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
