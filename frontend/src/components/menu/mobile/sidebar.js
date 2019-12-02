import React from "react";
import { Menu, Sidebar, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { Button } from "react-bootstrap";
import MobileSidebarItem from "./sidebarItem";
import MobileMenuUserInformation from "./userInformation";
import MobileMenuSidebarLogoutItem from "./sidebarLogoutItem";

const MobileSidebar = props => {
  return (
    <>
      <Sidebar
        as={Menu}
        animation="push"
        onHide={() => props.toggleSidebar(false)}
        vertical
        visible={props.visible}
        className="my-sidebar"
      >
        <div className="sidebar-menu-items-container">
          <div className="sidebar-header">
            <Button
              variant="link"
              className="button-icon"
              onClick={() => props.toggleSidebar(false)}
            >
              <Icon name="x" />
            </Button>
          </div>
          <MobileMenuUserInformation />

          <MobileSidebarItem
            href="/dashboard"
            iconName="home"
            text="Strona główna"
          />
          <MobileSidebarItem
            href="/dashboard/room-reservation/menu"
            iconName="calendar alternate outline"
            text="Rezerwacja salek"
          />
          <MobileSidebarItem
            href="/dashboard/management"
            iconName="cog"
            text="Administracja"
          />
        </div>
        <div className="sidebar-menu-item-logout-container">
          <MobileMenuSidebarLogoutItem />
        </div>
      </Sidebar>
    </>
  );
};

export default MobileSidebar;
