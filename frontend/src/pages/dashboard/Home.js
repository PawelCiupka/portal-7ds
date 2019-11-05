import React from "react";
import UnverifiedUsersTable from "../../components/managementTables/unverifiedUsersTable";
import TicketsTable from "../../components/managementTables/ticketsTable";

const Home = () => {
  return (
    <>
      <h1>Cześć z głównej strony!</h1>
      <UnverifiedUsersTable />
      {/* <TicketsTable /> */}
    </>
  );
};

export default Home;
