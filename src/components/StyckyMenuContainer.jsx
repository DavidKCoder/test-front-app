import React from "react";
import Menu from "./Menu";
import useWindowWidth from "../hooks/useWindowWidth";
import useMenuPosition from "../hooks/useMenuPosition";

const StickyMenuContainer = () => {
  const width = useWindowWidth();
  const menuPosition = useMenuPosition();

  const isMobile = width < 768;

  return (
    <div id='sticky-menu-container' className={isMobile ? 'fixed-menu-container' : ''}
         style={{
           opacity: menuPosition >= 200 ? 0 : 1,
           transition: 'opacity 0.5s linear',
         }}>
      <Menu/>
    </div>
  );
};

export default StickyMenuContainer;