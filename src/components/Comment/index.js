import React from "react";
import moment from "moment";

const Comment = ({
  comment: {
    user: { name, avatarUrl },
    message,
    timestamp,
  },
}) => {
  return (
    <div class="comment">
      {" "}
      <a class="avatar">
        <img src={avatarUrl} />
      </a>
      <div class="content">
        <a class="author">{name}</a>
        <div class="metadata">
          <div class="date">{moment(timestamp).fromNow()}</div>
        </div>
        <div class="text">{message}</div>
        <div class="actions">
          <a class="reply">Reply</a>
        </div>
      </div>
    </div>
  );
};

export default Comment;
