import React, { Component } from 'react'

// This is a class component
export default class Header extends Component {
    render() {
        return (
            <div>
                This is header<br></br>
                {this.props.songname}<br></br>
                {this.props.songduration}<br></br>
                <hr></hr>
                <br></br>

            </div>
        )
    }
}
