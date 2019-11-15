import React from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import { clearErrors } from "../../actions/error";
import UserManagementDataChangeForm from "../../components/userManagement/dataChangeForm";
import UserManagementRoomChangeForm from "../../components/userManagement/roomChangeForm";
import UserManagementSecurityChangeForm from "../../components/userManagement/securityChangeForm";

const mapStateToProps = ({ session }) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  clearErrors: () => dispatch(clearErrors())
});

const UserCenter = ({ session, clearErrors }) => {
  return (
    <>
      <h1>
        {session.firstname} {session.lastname}, cześć z centrum zarządzania
        użytkownikiem!
      </h1>
      <Tabs
        defaultActiveKey="userData"
        id="uncontrolled-tab-example"
        onSelect={clearErrors}
      >
        <Tab eventKey="userData" title="Dane Osobowe">
          <UserManagementDataChangeForm />
        </Tab>
        <Tab eventKey="userPassword" title="Bezpieczeństwo">
          <UserManagementSecurityChangeForm />
        </Tab>
        <Tab eventKey="userRoom" title="Pokój">
          <UserManagementRoomChangeForm />
        </Tab>
      </Tabs>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
