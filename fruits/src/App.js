import React, { Component } from 'react';
import {choice,remove} from './helpers';


class App extends Component {
  render() {
    return (
      <div>
     <p>my fruit is: {choice()} </p>
     <p>I want to {remove()} </p>

      </div>
    );
  }
}

export default App;
