import React, { useEffect, useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import { getListOfInformation } from "../../util/dashboard";
import DashboardInformation from "./information";

const DashboardInformationPanel = () => {
  const [informations, setInformations] = useState([]);

  useEffect(() => {
    getListOfInformation().then(res => {
      setInformations(res.data.dashboardInformations);
    });
  }, []);
  return (
    <>
      {informations !== [] ? (
        <Tabs defaultActiveKey="general" justify>
          {informations.map(info => (
            <Tab
              eventKey={info.symbol}
              title={info.title}
              className="cms-content"
              key={info.symbol}
            >
              <DashboardInformation content={info.content} />
            </Tab>
          ))}
        </Tabs>
      ) : null}
    </>
  );
};

export default DashboardInformationPanel;
