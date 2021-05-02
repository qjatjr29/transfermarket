import React, { Component } from 'react';

class App extends Component {
  state = {
    PlayerValues: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/');
      const PlayerValues = await res.json();
      this.setState({
        PlayerValues
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        {this.state.PlayerValues.map(player => (
          <div key={player.ranking}>
            <h1>{player.name}</h1>
            <span>{player.ranking}</span>
            <span>{player.value}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
