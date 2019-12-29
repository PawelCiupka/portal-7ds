import React from "react";
import { connect } from "react-redux";
import { Menu, Sidebar } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import DesktopNavbarItem from "./navbarItem";
import DesktopNavbarItemBlank from "./navbarItemBlank";

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
          <DesktopNavbarItem
            href="/dashboard/contact"
            iconName="comments"
            text="Kontakt"
          />
          <DesktopNavbarItemBlank
            href="https://www.facebook.com/groups/7ds.lodz/"
            iconName="facebook"
            text="Grupa"
          />
          {props.session.role === "admin" ? (
            <DesktopNavbarItem
              href="/dashboard/management"
              iconName="cog"
              text="Administracja"
            />
          ) : null}
          {props.session.role === "admin" ? (
            <DesktopNavbarItemBlank
              href="https://app.graphcms.com/c5115c472ca94516a364586ef2dd1d7c/master/content/d87a2617be49433daf2acb1ff4a0a978/table"
              iconName="edit"
              text="Zarządzanie treścią"
            />
          ) : null}
        </div>
      </Sidebar>
    </>
  );
};

export default connect(mapStateToProps, null)(DesktopNavbar);
