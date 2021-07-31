import React, { Component } from 'react'

// This is a class component
export default class Song extends Component {
    render() {
        return (
            <div>
                Id: {this.props.id}; Song name: {this.props.title}; Song Duration: {this.props.duration}<br></br>
                <button onClick={this.props.onClick}>Play</button>
                <br></br><br></br>
            </div>
        )
    }
}
