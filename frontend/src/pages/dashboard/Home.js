import React from "react";
import { Card } from "react-bootstrap";
import DashboardInformationPanel from "../../components/dashboard/informationPanel";

const Home = () => {
  return (
    <>
      <section className="dashboard">
        <Card className="dashboard-card">
          <DashboardInformationPanel />
        </Card>
        <Card className="dashboard-card"></Card>
      </section>
    </>
  );
};

export default Home;
