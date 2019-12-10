import React from "react";
import { connect } from "react-redux";
import { NavDropdown, Button, Dropdown } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
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
      <Dropdown id="desktop-user-dropdown">
        {/* <button
          role="button"
          type="button"
          id="dropdown-basic"
          class="header-user-icon-container"
          data-toggle="dropdown"
        >
          <Icon className="header-user-icon" name="user" />
        </button> */}
        <Dropdown.Toggle className="header-user-icon-container" bsPrefix="">
          <Icon className="header-user-icon" name="user" />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Header>
            <div>
              <span>
                Cześć, {props.session.firstname} {props.session.lastname}
              </span>
            </div>
          </Dropdown.Header>
          <Dropdown.Item href="/dashboard/user/edit">Ustawienia</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={props.logout}>Wyloguj</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
