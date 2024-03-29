import React from "react";
import arrowDownIcon from '../assets/icons/arrow-down.svg';
import arrowRightIcon from '../assets/icons/arrow-right.svg';
import burgerIcon from '../assets/icons/burger.svg';
import closeIcon from '../assets/icons/close.svg';
import useWindowWidth from "../hooks/useWindowWidth";
import { useMenuContext } from "../context/menuContext";

function Menu() {
  const { isOpen, handleToggleMenu } = useMenuContext();

  const width = useWindowWidth();
  const isMobile = width < 768;


  if (isMobile) {
    return (
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" checked={isOpen} onChange={() => handleToggleMenu(!isOpen)}/>
        <label className="menu__btn" htmlFor="menu__toggle">
          <div className="menu__logo">
            {isOpen ?
              <>
                <header className="header">
                  <h2>Logotype</h2>
                </header>
                <div>
                  <img src={closeIcon} alt="icon"/>
                </div>
              </>
              : <img src={burgerIcon} alt="icon"/>
            }
          </div>
        </label>
        <ul className="menu__box">
          <li>Demos
            <img src={arrowDownIcon} alt="arrow-down"/></li>
          <li>
            Post
            <img src={arrowDownIcon} alt="arrow-down"/>
            <ul>
              <li>
                Post Header
                <img src={arrowRightIcon} alt="arrow-right"/>
              </li>
              <li>
                Post Layout
                <img src={arrowRightIcon} alt="arrow-right"/>
              </li>
              <li>
                Share Buttons
                <img src={arrowRightIcon} alt="arrow-right"/>
              </li>
              <li>
                Gallery Post
                <img src={arrowRightIcon} alt="arrow-right"/>
              </li>
              <li>
                Video Post
                <img src={arrowRightIcon} alt="arrow-right"/>
              </li>
            </ul>
          </li>
          <li>Features
            <img src={arrowDownIcon} alt="arrow-down"/></li>
          <li>Categories
            <img src={arrowDownIcon} alt="arrow-down"/></li>
          <li>Shop
            <img src={arrowDownIcon} alt="arrow-down"/></li>
          <li>Buy Now</li>
        </ul>
      </div>
    )
  }

  return (
    <nav>
      <ul>
        <li>Demos
          <img src={arrowDownIcon} alt="arrow-down"/></li>
        <li>
          Post
          <img src={arrowDownIcon} alt="arrow-down"/>
          <ul>
            <li>
              Post Header
              <img src={arrowRightIcon} alt="arrow-right"/>
            </li>
            <li>
              Post Layout
              <img src={arrowRightIcon} alt="arrow-right"/>
            </li>
            <li>
              Share Buttons
              <img src={arrowRightIcon} alt="arrow-right"/>
            </li>
            <li>
              Gallery Post
              <img src={arrowRightIcon} alt="arrow-right"/>
            </li>
            <li>
              Video Post
              <img src={arrowRightIcon} alt="arrow-right"/>
            </li>
          </ul>
        </li>
        <li>Features
          <img src={arrowDownIcon} alt="arrow-down"/></li>
        <li>Categories
          <img src={arrowDownIcon} alt="arrow-down"/></li>
        <li>Shop
          <img src={arrowDownIcon} alt="arrow-down"/></li>
        <li>Buy Now</li>
      </ul>
    </nav>
  );
}

export default Menu;