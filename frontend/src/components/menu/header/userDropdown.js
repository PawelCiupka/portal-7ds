import React from "react";
import { connect } from "react-redux";
import { NavDropdown, Button } from "react-bootstrap";
import { logout } from "../../../actions/session";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const UserDropdown = props => {
  return (
    <>
      <NavDropdown title={props.session.username} id="basic-nav-dropdown">
        <NavDropdown.Header>
          {props.session.firstname} {props.session.lastname}
        </NavDropdown.Header>
        <NavDropdown.Item href="/dashboard/user/edit">
          Zarządzaj
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <Button onClick={props.logout}>Wyloguj</Button>
      </NavDropdown>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
