import React from "react";
import { connect } from "react-redux";
import { Icon } from "semantic-ui-react";
import { logout } from "../../../actions/session";
import { Link } from "react-router-dom";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const UserDropdown = props => {
  return (
    <>
      <Link
        id="desktop-user-information"
        to="/dashboard/user/edit"
      >
        <div className="header-user-icon-container">
          <Icon className="header-user-icon" name="user" />
        </div>
        <div>
          <h3>
            {props.session.firstname} {props.session.lastname}
          </h3>
        </div>
      </Link>
      {/* <Dropdown id="desktop-user-dropdown">
        <Dropdown.Toggle className="header-user-icon-container" bsPrefix="">
          <Icon className="header-user-icon" name="user" />
        </Dropdown.Toggle>
        <div className="user-information">
          <h3>
            {props.session.firstname} {props.session.lastname}
          </h3>
        </div>
        <Dropdown.Menu>
          <Dropdown.Item href="/dashboard/user/edit">Ustawienia</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item onClick={props.logout}>Wyloguj</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserDropdown);
