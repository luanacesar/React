import React, { Component } from 'react';
import './Pokecard.css';

const poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' 

class Pokecard extends Component{
    render(){
        
        const poke = poke_API + this.props.id + '.png';

        return(
            <div className="Pokecard">
                    <h1 className="Pokecard-title">{this.props.name}</h1>
                    <img src={poke}  alt={this.props.name} />
                     <div className="Pokecard-date"> Type: {this.props.type} </div>
                     <div className="Pokecard-date"> Exp: {this.props.exp} </div>
            </div>

        );
    }
}

export default Pokecard;