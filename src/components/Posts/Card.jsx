import React, { useState } from "react";
import PopUp from "./PopUp";
import { useFilterContext } from "../../context/searchContext";
import ovalIcon from '../../assets/icons/oval.svg'
import { Loader } from "../Loader";

function Card() {
  const { filteredData, data } = useFilterContext();
  const [ popUp, setPopUp ] = useState(false);
  const [ selectedPost, setSelectedPost ] = useState(null);


  const handlePopUp = (post) => {
    setSelectedPost(post);
    setPopUp(true);
  }

  if (!data.length) {
    return <Loader/>

  }

  if (!filteredData.length) {
    return (
      <div className="loader-container">
        <h3 className="not-found">No posts found.</h3>
      </div>
    )
  }

  return (
    <div className="container">
      {filteredData.map((post, index) => {
        const { autor, date, img, img_2x, tags, text, title, views } = post;
        return (
          <div className="card" key={`${post.text}-${index}`} onClick={() => handlePopUp(post)}>
            <img
              srcSet={`${img} 1x, ${img_2x} 2x`}
              src={img}
              alt={`${title} image`}
            />
            <div className="card-content">
              <div className="card-tags">{tags}</div>
              <div className="card-header">{title}</div>
              <div className="card-subheader">
                <span>{autor}</span>
                <img src={ovalIcon} alt="oval icon"/>
                <span>{date}</span>
                <img src={ovalIcon} alt="oval icon"/>
                <span>{views} Views</span>
              </div>
              <div className="card-info">{text}</div>
            </div>
          </div>
        )
      })}
      <div className={"Checkout" + ( popUp ? " during-popup" : "" )}>
        {popUp && <PopUp selectedPost={selectedPost} setPopUp={setPopUp}/>}
      </div>
    </div>
  )
}

export default Card;