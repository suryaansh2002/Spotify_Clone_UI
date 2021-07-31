import "./App.css";
import React, { Component } from "react";
import Header from "./components/header.jsx";
import Song from "./components/song.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { headersong: "Header Song", headerduration: "Song Duration" };
    this.handler = this.handler.bind(this);
    this.items = [
      {
        id: 1,
        title: "name 1",
        duration: "3:00",
      },
      {
        id: 2,
        title: "name 2",
        duration: "3:20",
      },
      {
        id: 3,
        title: "name 3",
        duration: "4:00",
      },
    ];
  }

  handler(item) {
    this.setState({
      headersong: item.title,
      headerduration: item.duration,
    });
  }

  render() {
    return (
      <div>
        <Header
          songname={this.state.headersong}
          songduration={this.state.headerduration}
        />

        {this.items.map((item) => (
          <Song
            id={item.id}
            key={item.id}
            title={item.title}
            duration={item.duration}
            onClick={() => this.handler(item)}
          />
        ))}
      </div>
    );
  }
}

export default App;
