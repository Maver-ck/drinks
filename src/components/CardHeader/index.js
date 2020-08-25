import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  background-color: #dbb561;
`;

const StyledTitleDiv = styled.div`
  color: #4c3800;
`;

const CardHeader = ({
  timeCreated,
  avatar,
  creator,
  eventName,
  location: { name, latitude, longitude },
}) => {
  return (
    <StyledDiv className="content">
      <div className="right floated meta">{timeCreated}</div>
      <img className="ui avatar image" src={avatar} alt="avatar" />
      {creator}
      <StyledTitleDiv className="header">{eventName}</StyledTitleDiv>
      <div className="meta">
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`}
        >
          Location: {name}
        </a>
      </div>
    </StyledDiv>
  );
};

export default CardHeader;
