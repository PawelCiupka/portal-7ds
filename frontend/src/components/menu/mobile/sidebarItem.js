import React from "react";
import { Menu, Icon } from "semantic-ui-react";

const MobileSidebarItem = props => {
  return (
    <div>
      <Menu.Item as="a" href={props.href} className="sidebar-menu-item">
        <span className="sidebar-span">
          <Icon className="sidebar-icon" name={props.iconName} />
          {props.text}
        </span>
      </Menu.Item>
    </div>
  );
};

export default MobileSidebarItem;
