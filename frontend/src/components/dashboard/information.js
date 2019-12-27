import React from "react";

const DashboardInformation = props => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.content.html }} />
    </>
  );
};

export default DashboardInformation;
