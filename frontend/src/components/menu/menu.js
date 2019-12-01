import React, { useState } from "react";
import MobileMenu from "./mobile/menu";
import DesktopMenu from "./desktop/menu";

const Menu = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 922);

  window.addEventListener("resize", () => {
    setIsMobile(window.innerWidth <= 768);
  });
  return <>{isMobile ? <MobileMenu /> : <DesktopMenu />}</>;
};

export default Menu;
