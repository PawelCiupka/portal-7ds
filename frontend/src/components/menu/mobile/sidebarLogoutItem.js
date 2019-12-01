import React from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";
import { logout } from "../../../actions/session";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const MobileMenuSidebarLogoutItem = props => {
  return (
    <>
      <Menu.Item as="a" href="" onClick={props.logout} className="sidebar-menu-item logout">
        <span className="sidebar-span">
          <Icon className="sidebar-icon" name="log out" />
          Wyloguj
        </span>
      </Menu.Item>
    </>
  );
};

export default connect(null, mapDispatchToProps)(MobileMenuSidebarLogoutItem);
