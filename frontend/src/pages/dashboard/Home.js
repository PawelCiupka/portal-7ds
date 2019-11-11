import React from "react";
import UnverifiedUsersTable from "../../components/managementTables/unverifiedUsersTable";
import TicketsTable from "../../components/managementTables/ticketsTable";
import UsersManagementTable from "../../components/managementTables/usersManagementTable";

const Home = () => {
  return (
    <>
      <h1>Cześć z głównej strony!</h1>
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

export default Home;
