import React, { Component } from 'react';
import Router from "Components/Router";
import GloblaStyles from "Components/globalStyles";


class App extends Component {
  render() {
    return (
      <>
        <Router />
        <GloblaStyles />
      </>
    );
  }
}

export default App;
