import React, { Component } from 'react';
import Calculator from '../containers/calculator';

class App extends Component {
  render() {
    return (
        <div>
            <h1>React-Redux Calculator</h1>
            <Calculator />
        </div>
    );
  }
}

export default App;
