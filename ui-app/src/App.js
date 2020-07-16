import React, { Component } from "react";
import "./App.css";

//link the api

let url = "https://breakingbadapi.com/api/characters";

const options = {
  method: "GET",
  headers: {
    Accept: "application/json",
  },
};

// function App() {
//   return <div className="App"></div>;
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: [],
      currentCount: 0,
      characters: [],
    };
  }
  render() {
    return (
      <React.Fragment>
        <h1>Breaking Bad</h1>
        <p>{this.state.characters[this.state.currentCount]}</p>
        <button className="leftButton" onClick={this.lastCharacter}>
          Go back
        </button>
        <button className="rightButton" onClick={this.nextCharacter}>
          Go forward
        </button>
      </React.Fragment>
    );
  }

  componentDidMount() {
    fetch(url, options)
      .then((res) => res.json())
      .then((convertedResponse) => {
        console.log(convertedResponse);
        this.setState({
          name: convertedResponse,
        });
        console.log(this.state.name[this.state.currentCount].name); //gets character in the array
      });
  }

  //function to slide to the next character
  nextCharacter = () => {
    // if (this.state.currentCount < this.state.characters.length - 1) {
    this.setState({
      currentCount: this.state.currentCount + 1,
    });
  };
  //   } else {
  //     this.setState({
  //       currentCount: 0,
  //     });
  //   }
  // };

  lastCharacter = () => {
    if (this.state.currentCount > this.state.characters.length + 1) {
      this.setState({
        currentCount: this.state.currentCount - 1,
      });
    }
  };
}

export default App;
