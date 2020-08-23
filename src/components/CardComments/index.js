import React, { useState } from "react";
import Comment from "../Comment";

const CardComments = (props) => {
  // declaring state variable showComments which we will use to show or hide comments
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="content">
      <span className="right floated">
        <i className="heart outline like icon"></i>
        17 likes
      </span>
      <i className="comment icon"></i>
      {/* will style this button later */}
      <button onClick={() => setShowComments(!showComments)}>
        {props.comments.length} comments
      </button>
      {showComments && (
        <div className="ui comments">
          {props.comments.map((comment, index) => {
            return <Comment comment={comment} />;
          })}
        </div>
      )}
    </div>
  );
};

export default CardComments;
