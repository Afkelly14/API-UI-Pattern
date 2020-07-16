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
        <p>{this.state.characters[0]}</p>
        <button onClick={this.nextCharacter}>Character</button>
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
        console.log(this.state.name[this.state.currentCount]); //gets character in the array
      });
  }

  nextCharacter = () =>
    fetch(url, options)
      .then((res) => res.json())
      .then((convertedResponse) => {
        console.log(convertedResponse);
        this.setState({
          characters: convertedResponse.characters,
        });
      });
}

export default App;
