import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import UserDropdown from "./userDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="light" fixed="top">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/dashboard">Portal 7DS</Navbar.Brand>
        <UserDropdown />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
