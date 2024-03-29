import { useEffect, useState } from 'react';

function useMenuPosition() {
  const [ menuPosition, setMenuPosition ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentMenuPosition = window.pageYOffset;
      setMenuPosition(currentMenuPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ menuPosition ]);

  return menuPosition;
}

export default useMenuPosition;