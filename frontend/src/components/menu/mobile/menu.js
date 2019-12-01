import React, { useState } from "react";
import { Navbar, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import MobileSidebar from "./sidebar";

const MobileMenu = () => {
  const [visible, setVisible] = useState(false);

  const toggleSidebar = visible => {
    console.log("xd");
    const page = document.getElementById("app-idc");
    if (visible) {
      page.style.backgroundColor = "rgba(0,0,0,0.3)";
    } else {
      page.style.backgroundColor = "rgba(0,0,0,0)";
    }
    setVisible(visible);
  };

  return (
    <>
      <Navbar expand="lg">
        <Button
          variant="link"
          className="button-icon"
          onClick={() => toggleSidebar(true)}
        >
          <Icon name="bars" />
        </Button>
        <Navbar.Brand href="#home">7DS</Navbar.Brand>

        <MobileSidebar
          visible={visible}
          toggleSidebar={() => toggleSidebar(false)}
        />
      </Navbar>
    </>
  );
};

export default MobileMenu;
