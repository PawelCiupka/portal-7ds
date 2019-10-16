import React from "react";
import { connect } from "react-redux";
import { NavDropdown, Button } from "react-bootstrap";
import { logout } from "../../actions/session";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
  });

const UserDropdown = ({ session, logout }) => {
  return (
    <>
      <NavDropdown title={session.username} id="basic-nav-dropdown">
        <NavDropdown.Header>
          {session.firstname} {session.lastname}
        </NavDropdown.Header>
        <NavDropdown.Item href="/dashboard/user/edit">
          Zarządzaj
        </NavDropdown.Item>        
        <NavDropdown.Divider />
        <Button onClick={logout}>Wyloguj</Button>
      </NavDropdown>
    </>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDropdown);
