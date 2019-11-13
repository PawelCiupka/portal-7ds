import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav } from "react-bootstrap";
import UserDropdown from "./userDropdown";

const Header = props => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">{props.pageTitle}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/dashboard">Strona główna</Nav.Link>
            <Nav.Link href="/dashboard/management">Administracja</Nav.Link>
            <UserDropdown />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

Header.propTypes = {
  pageTitle: PropTypes.string.isRequired
};

export default Header;
