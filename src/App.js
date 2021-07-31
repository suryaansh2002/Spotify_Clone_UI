import './App.css';
import React, { Component } from 'react'
import Header from './components/header.jsx';
import Song from './components/song.jsx';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state={headersong:"Header Song", headerduration:"Song Duration"}
    this.handler = this.handler.bind(this)
    this.items=[
      {
        id:1,
        title:"name 1",
        duration:"3:00",
      },
      {
        id:2,
        title:"name 2",
        duration:"3:20",
      },
      {
        id:3,
        title:"name 3",
        duration:"4:00"
      }
    ]

  }

  handler(event){
    this.setState({
      headersong : event.target.value.title,
      headerduration: event.target.value.duration
    })
  }

  render() {


return (
<div>
  <Header songname={this.state.headersong} songduration={this.state.headerduration} ></Header>

  {this.items.map((item)=>    
  <Song id={item.id} title={item.title} duration={item.duration} onClick={this.handler} value={item}></Song>
)}

</div>
);
}
}

export default App;
