import React, { useState } from "react";
import Comment from "../Comment";
import { StyledButton, StyledIcon } from "./styled-card-comments";

const CardComments = (props) => {
  // declaring state variable showComments which we will use to show or hide comments
  const [showComments, setShowComments] = useState(false);

  return (
    <div className="content">
      {/* will style this button later */}
      <StyledButton onClick={() => setShowComments(!showComments)}>
        <StyledIcon className="comment icon"></StyledIcon>
        {props.comments.length} comments
      </StyledButton>
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
