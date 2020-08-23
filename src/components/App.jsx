import React from "react";
import api from "../api";
import CommentContainer from "./CommentContainer";
import DrinksHeader from "./DrinksHeader";

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
      <>
        <DrinksHeader />
        <CommentContainer events={events} />
      </>
    );
  }
}

export default App;
