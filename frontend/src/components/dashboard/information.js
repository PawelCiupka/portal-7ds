import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const DashboardInformation = props => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: props.content.html }} />
    </>
  );
};

export default DashboardInformation;
