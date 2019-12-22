import React from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import { logout } from "../../actions/session";
import UserManagementDataChangeForm from "../../components/userManagement/dataChangeForm";
import UserManagementRoomChangeForm from "../../components/userManagement/roomChangeForm";
import UserManagementSecurityChangeForm from "../../components/userManagement/securityChangeForm";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

const UserCenter = ({ session, logout }) => {
  return (
    <>
      <div className="dashboard-page-title flex-separate">
        <h4>Panel Zarządzania użytkownikiem {session.username}</h4>
        <Button onClick={logout} className="logout-btn">
          <span className="logout-span">
            <Icon className="logout-icon" name="log out" />
            Wyloguj
          </span>
        </Button>
      </div>
      <Card className="dashboard-card user-management-card">
        <UserManagementDataChangeForm />
      </Card>
      <Card className="dashboard-card user-management-card">
        <UserManagementSecurityChangeForm />
      </Card>
      <Card className="dashboard-card user-management-card">
        <UserManagementRoomChangeForm />
      </Card>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
