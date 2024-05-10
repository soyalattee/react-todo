import React from "react";
function CaptionImage(props) {
  return (
    <div>
      <img src={props.imgUrl} alt={props.imgAlt}></img>
      <p>{props.caption}</p>
    </div>
  );
}

export default CaptionImage;
