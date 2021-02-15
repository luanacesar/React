import React, {Component } from 'react';
import './App.css'
import logo from './logo.svg';
import say from './Pokecard';

class App extends Component {
  render(){
    let say = this.props.say;
    return (
      <div>

     
      <div className="pokedex-style">
            <h1>Pokedex</h1>
            <p>Hello {say}</p>
            <Pokecard />
      </div>
      </div>)
  }
}
export default App;
