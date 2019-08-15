import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';

// TODO - start the section on the react course
class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
