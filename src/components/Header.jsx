import React, { useState } from "react";
import StickyMenuContainer from "./StyckyMenuContainer";
import useWindowWidth from "../hooks/useWindowWidth";
import useMenuPosition from "../hooks/useMenuPosition";
import { useFilterContext } from "../context/searchContext";
import { useMenuContext } from "../context/menuContext";
import searchIcon from "../assets/icons/search.svg";

function Header() {
  const { isOpen } = useMenuContext();
  const { searchQuery, setSearchQuery } = useFilterContext();

  const width = useWindowWidth();
  const menuPosition = useMenuPosition();
  const isMobile = width < 768;

  const [ showSearchInput, setShowSearchInput ] = useState(false);

  const handleToggleInput = () => {
    setShowSearchInput(!showSearchInput);
  };


  return (
    <>
      <header className="header" id={isMobile ? 'sticky-menu-container' : ''} style={{
        opacity: menuPosition >= 200 || isOpen ? 0 : 1,
        transition: 'opacity 0.5s linear',
      }}>
        <span/>
        <h2>Logotype</h2>
        <form role="search" method="get" className="search-form" action="">
          <input
            type="search"
            className="search-field" placeholder="Search …" title="Search for:"
            style={{
              opacity: showSearchInput ? 1 : 0,
              display: showSearchInput ? 'block' : 'none',
              transition: "display 0.2s linear"
            }}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img src={searchIcon} alt="search icon" onClick={handleToggleInput}/>
        </form>
      </header>
      <StickyMenuContainer/>
    </>
  );
}

export default Header;