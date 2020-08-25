import React from "react";

const ImageCard = ({ eventType }) => {
  return (
    <div className="image">
      <img
        src={require(`../../resources/${eventType
          .slice(0, -1)
          .toLowerCase()}-icon-background.png`)}
        alt="icon"
      />
    </div>
  );
};

export default ImageCard;
