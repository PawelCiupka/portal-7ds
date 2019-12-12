import React from "react";
import { Navbar } from "react-bootstrap";
import UserDropdown from "./userDropdown";

const Header = () => {
  return (
    <>
      <Navbar bg="light" fixed="top">
        <div className="header-navbar-brand-container">
          <Navbar.Brand href="/dashboard">Portal 7DS</Navbar.Brand>
        </div>
        <div className="header-container">
          <div></div>
          <UserDropdown />
        </div>
      </Navbar>
    </>
  );
};

export default Header;
