import React from "react";
import { Card } from "react-bootstrap";
import DashboardInformationPanel from "../../components/dashboard/informationPanel";

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
        </Card>
        <Card className="dashboard-card">
          <h5>Aktualności</h5>
        </Card>
      </section>
    </>
  );
};

export default Home;
