import React from "react";
import moment from "moment";
import EventCard from "../EventCard";

const CommentContainer = ({ events }) => {
  return (
    <div className="ui container comments">
      <div className="ui cards">
        {events.map((event, index) => {
          return (
            <EventCard
              eventName={event.title}
              creator={event.creator.name}
              timeCreated={moment(event.time).fromNow()}
              avatar={event.creator.avatarUrl}
              eventType={event.type}
              comments={event.comments}
              location={event.location}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CommentContainer;
