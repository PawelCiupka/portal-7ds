import React from "react";
import { connect } from "react-redux";
import { Menu, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DesktopNavbarItem from "./navbarItem";

const mapStateToProps = ({ session }) => ({
  session
});

const DesktopNavbar = props => {
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
          {props.session.role === "admin" ? (
            <DesktopNavbarItem
              href="/dashboard/management"
              iconName="cog"
              text="Administracja"
            />
          ) : null}
        </div>
      </Sidebar>
    </>
  );
};

export default connect(mapStateToProps, null)(DesktopNavbar);
