import React, { useEffect, useRef } from "react";

const PopUp = (props) => {
  const { selectedPost, setPopUp } = props;
  const { title, text, img } = selectedPost;
  const popUpRef = useRef(null);

  const closePopUp = () => {
    setPopUp(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popUpRef.current && !popUpRef.current.contains(event.target)) {
        closePopUp();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ setPopUp ]);

  return (
    <div ref={popUpRef} className="pop-up" style={{ backgroundImage: `url(${img})` }}>
      <div className="blur-overlay"/>
      <div>
        <button className="popup-x" onClick={closePopUp}>{'\u0078'}</button>
      </div>
      <div className="card-header">{title}</div>
      <div className="card-info">{text}</div>
    </div>
  );
}

export default PopUp;