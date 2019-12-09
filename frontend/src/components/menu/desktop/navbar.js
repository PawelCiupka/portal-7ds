import React from "react";
import { Menu, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DesktopNavbarItem from "./navbarItem";

const DesktopNavbar = () => {
  return (
    <>
      <Sidebar as={Menu} vertical visible={true} className="desktop-navbar">
        <div className="navbar-menu-items-container">
          <DesktopNavbarItem
            href="/dashboard"
            iconName="home"
            text="Strona główna"
          />
          <DesktopNavbarItem
            href="/dashboard/room-reservation/menu"
            iconName="calendar alternate outline"
            text="Rezerwacja salek"
          />
          <DesktopNavbarItem
            href="/dashboard/management"
            iconName="cog"
            text="Administracja"
          />
        </div>
      </Sidebar>
    </>
  );
};

export default DesktopNavbar;
