import React, { Component } from 'react'
import play from '../play-icon.png'

// This is a class component
export default class Song extends Component {
    render() {
        return (
    <div className={`row song ${this.props.cname}`}>

        <div className="col-lg-1">
        {this.props.id}
          </div>
          <div className="col-lg-6">
          <a onClick={this.props.onClick}>
          {this.props.title}
          </a>
          </div>
          <div className="col-lg-3">
          {this.props.duration}
          </div>
          <div className="col-lg-2">
          <button onClick={this.props.onClick} className="temp2">
          <img className="play2" src={play}></img>
          </button>

          </div>               
    </div>
        )
    }
}
