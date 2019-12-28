import React from "react";
import { Card } from "react-bootstrap";
import DashboardInformationPanel from "../../components/dashboard/informationPanel";
import DashboardUserReservationTable from "../../components/dashboard/userReservationTable";
import DashboardPosts from "../../components/dashboard/posts";
import { getAllRMPosts, getAllAdministrationPosts } from "../../util/dashboard";

const Home = () => {
  return (
    <>
      <div className="dashboard-page-title">
        <h4>Strona główna</h4>
      </div>
      <section className="dashboard">
        <Card className="dashboard-card">
          <DashboardInformationPanel />
        </Card>
        <Card className="dashboard-card">
          <h5>Zarezerwowane salki</h5>
          <DashboardUserReservationTable />
        </Card>
        <Card className="dashboard-card">
          <h5>Aktualności - Rada Mieszkańców</h5>
          <DashboardPosts getterFunc={getAllRMPosts} />
        </Card>
        <Card className="dashboard-card">
          <h5>Aktualności - Administracja Akademika</h5>
          <DashboardPosts getterFunc={getAllAdministrationPosts} />
        </Card>
      </section>
    </>
  );
};

export default Home;
