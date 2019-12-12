import React from "react";
import { connect } from "react-redux";
import { Dropdown } from "react-bootstrap";
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
