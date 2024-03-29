import React, { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => useContext(MenuContext);

export const MenuContextProvider = ({ children }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  const handleToggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <MenuContext.Provider value={{ isOpen, handleToggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}