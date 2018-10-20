import React, { Component } from "react";
import "./App.css";
import DrumPad from "./components/DrumPad";

const soundKeyMappings = [
  {
    keyCode: 81,
    keyLetter: "Q",
    drumType: "Heater 1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyLetter: "W",
    drumType: "Heater 2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyLetter: "E",
    drumType: "Heater 3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyLetter: "A",
    drumType: "Heater 4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyLetter: "S",
    drumType: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyLetter: "D",
    drumType: "Open High Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyLetter: "Z",
    drumType: "Kick n' Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyLetter: "X",
    drumType: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyLetter: "C",
    drumType: "Closed High Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleKeyPress(e) {
    const sounds = {
      88: "Closed High Hat",
      67: "Kick",
      90: "Kick n' Hat",
      68: "Open High Hat",
      83: "Clap",
      65: "Heater 4",
      69: "Heater 3",
      87: "Heater 2",
      81: "Heater 1"
    };

    if (sounds.hasOwnProperty(e.keyCode)) {
      const soundId = sounds[e.keyCode];

      const soundElement = document.getElementById(soundId);
      soundElement.currentTime = 0;
      soundElement.play();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown");
  }

  render() {
    return (
      <div id="drum-machine">
        <h2>Drum machine</h2>
        <div id="display" className="App">
          {soundKeyMappings.map(soundInfo => (
            <DrumPad data={soundInfo} handleKeyPress={this.handleKeyPress} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
