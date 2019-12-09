import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const DesktopNavbarItem = props => {
  return (
    <div>
      <Menu.Item as="a" href={props.href} className="navbar-menu-item">
        <span className="navbar-span">
          <Icon className="navbar-icon" name={props.iconName} />
          {props.text}
        </span>
      </Menu.Item>
    </div>
  );
};

export default DesktopNavbarItem;
