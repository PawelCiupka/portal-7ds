import React from "react";
import AdministrationUnverifiedUsersTable from "../../components/administration/unverifiedUsersTable";
import AdministrationTicketsTable from "../../components/administration/ticketsTable";
import AdministrationUsersTable from "../../components/administration/usersTable";

const Management = () => {
  return (
    <>
      <div className="dashboard-page-title">
        <h4>Panel administracyjny</h4>
      </div>
      <AdministrationUnverifiedUsersTable />
      <AdministrationTicketsTable />
      <AdministrationUsersTable />
    </>
  );
};

export default Management;
