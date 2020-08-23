import React from "react";

const CardHeader = (props) => {
  return (
    <div className="content">
      <div className="right floated meta">{props.timeCreated}</div>
      <img className="ui avatar image" src={props.avatar} alt="avatar" />
      {props.creator}
      <div className="header">{props.eventName}</div>
      <div className="meta">
        <a>Location: {props.location.name}</a>
      </div>
    </div>
  );
};

export default CardHeader;
