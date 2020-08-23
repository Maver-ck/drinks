import React from "react";

const ImageCard = (props) => {
  return (
    <div className="image">
      <img
        src={`/${props.eventType.substring(
          0,
          props.eventType.length - 1
        )}-icon-background.png`.toLowerCase()}
        alt="icon"
      />
    </div>
  );
};

export default ImageCard;
