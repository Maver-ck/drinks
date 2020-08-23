import React from "react";

const CardComments = (props) => {
  return (
    <div className="content">
      <span className="right floated">
        <i className="heart outline like icon"></i>
        17 likes
      </span>
      <i className="comment icon"></i>
      <a>{props.comments.length} comments</a>
    </div>
  );
};

export default CardComments;
