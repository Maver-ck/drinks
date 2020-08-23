import React from "react";

const CardHeader = ({
  timeCreated,
  avatar,
  creator,
  eventName,
  location: { name, latitude, longitude },
}) => {
  return (
    <div className="content">
      <div className="right floated meta">{timeCreated}</div>
      <img className="ui avatar image" src={avatar} alt="avatar" />
      {creator}
      <div className="header">{eventName}</div>
      <div className="meta">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
        >
          Location: {name}
        </a>
      </div>
    </div>
  );
};

export default CardHeader;
