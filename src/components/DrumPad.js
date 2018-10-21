import React, { Component } from "react";

class DrumPad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      check: ""
    };
    this.triggerAudio = this.triggerAudio.bind(this);
  }
  l;
  triggerAudio(e) {
    //Get the 0th child node element and trigger it.
    const soundElement = e.target.childNodes[0];
    soundElement.currentTime = 0;
    soundElement.play();
  }

  render() {
    return (
      <div
        className="drum-pad"
        id={this.props.data.keyCode}
        onClick={this.triggerAudio}
      >
        <audio
          className="clip"
          id={this.props.data.drumType}
          src={this.props.data.url}
        />
        {this.props.data.keyLetter}
      </div>
    );
  }
}

export default DrumPad;
