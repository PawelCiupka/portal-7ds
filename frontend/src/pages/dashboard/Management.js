import React from "react";
import UnverifiedUsersTable from "../../components/management/unverifiedUsersTable";
import TicketsTable from "../../components/management/ticketsTable";
import UsersManagementTable from "../../components/management/usersManagementTable";

const Management = () => {
  return (
    <>
      <h1>Management!</h1>
      <br />
      <UnverifiedUsersTable />
      <br />
      <br />
      <br />
      <TicketsTable />
      <br />
      <br />
      <br />
      <UsersManagementTable />
    </>
  );
};

export default Management;
