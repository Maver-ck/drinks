import React from "react";
import ImageCard from "../ImageCard";
import CardHeader from "../CardHeader";
import CardComments from "../CardComments";
import "./index.css";

const EventCard = (props) => {
  console.log(`/${props.eventType}-icon.png`.toLowerCase());
  return (
    <div className="card">
      <CardHeader
        timeCreated={props.timeCreated}
        avatar={props.avatar}
        eventName={props.eventName}
        location={props.location}
      />
      <ImageCard eventType={props.eventType}></ImageCard>
      <CardComments comments={props.comments} />
    </div>
  );
};

export default EventCard;
