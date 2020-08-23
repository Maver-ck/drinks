import React from "react";
import moment from "moment";
import api from "../api";
import EventCard from "./EventCard";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });
    await api.getAllEvents().then((event) => {
      console.log(event.data);
      this.setState({
        events: event.data,
        isLoading: false,
      });
    });
  };

  render() {
    const { events, isLoading } = this.state;
    console.log(events);
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
  }
}

export default App;
