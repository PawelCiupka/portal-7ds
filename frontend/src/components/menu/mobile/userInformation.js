import React from "react";
import { connect } from "react-redux";
import { Menu, Icon } from "semantic-ui-react";

const mapStateToProps = ({ session }) => ({
  session
});

const MobileMenuUserInformation = props => {
  return (
    <div>
      <Menu.Item className="sidebar-menu-user-information">
        <div className="sidebar-user-icon-container">
          <Icon className="sidebar-user-icon" name="user" />
        </div>
        <div>
          <h3>
            {props.session.firstname} {props.session.lastname}
          </h3>
          <span>
            <a href="/dashboard/user/edit">Zarządzaj</a>
          </span>
        </div>
      </Menu.Item>
    </div>
  );
};

export default connect(mapStateToProps, null)(MobileMenuUserInformation);
