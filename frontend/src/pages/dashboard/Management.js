import React from "react";
import AdministrationUnverifiedUsersTable from "../../components/administration/unverifiedUsersTable";
import AdministrationTicketsTable from "../../components/administration/ticketsTable";
import AdministrationUsersTable from "../../components/administration/usersTable";

const Management = () => {
  return (
    <>
      <h1>Management!</h1>
      <br />
      <AdministrationUnverifiedUsersTable />
      <br />
      <br />
      <br />
      <AdministrationTicketsTable />
      <br />
      <br />
      <br />
      <AdministrationUsersTable />
    </>
  );
};

export default Management;
