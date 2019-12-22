import React from "react";
import AdministrationUnverifiedUsersTable from "../../components/administration/unverifiedUsersTable";
import AdministrationTicketsTable from "../../components/administration/ticketsTable";
import AdministrationUsersTable from "../../components/administration/usersTable";
import { Card } from "react-bootstrap";

const Management = () => {
  return (
    <>
      <div className="dashboard-page-title">
        <h4>Panel administracyjny</h4>
      </div>

      <Card className="dashboard-card">
        <AdministrationUnverifiedUsersTable />
      </Card>
      <Card className="dashboard-card">
        <AdministrationTicketsTable />
      </Card>
      <Card className="dashboard-card">
        <AdministrationUsersTable />
      </Card>
    </>
  );
};

export default Management;
