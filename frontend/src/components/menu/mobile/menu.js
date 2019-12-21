import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import MobileSidebar from "./sidebar";

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = visible => {
    const sliderHidder = document.getElementById("slider-hidder");
    const navbar = document.getElementById("mobile-navbar");
    const body = document.body;
    if (visible) {
      sliderHidder.style.display = "block";
      body.style.overflow = "hidden";
      navbar.style.backgroundColor = "#999";
    } else {
      sliderHidder.style.display = "none";
      body.style.overflow = "visible";
      navbar.style.backgroundColor = "#fff";
    }
    setVisible(visible);
  };

  return (
    <>
      <Navbar expand="lg" fixed="top" id="mobile-navbar">
        <Button
          variant="link"
          className="button-icon"
          onClick={() => toggleSidebar(true)}
        >
          <Icon name="bars" />
        </Button>
        <Navbar.Brand href="/dashboard">Portal 7DS</Navbar.Brand>

        <MobileSidebar
          visible={visible}
          toggleSidebar={() => toggleSidebar(false)}
        />
      </Navbar>
    </>
  );
};

export default MobileMenu;
