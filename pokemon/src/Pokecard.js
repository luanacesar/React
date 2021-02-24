import React, { Component } from 'react';
import './Pokecard.css';

// const poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' 

const poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

class Pokecard extends Component{
    render(){
       
        let imgPoke;
        if (this.props.id <= 10) {
             imgPoke = poke_API + '00' + this.props.id + '.png';
        } else if (this.props.id > 10 && this.props.id < 100) {
             imgPoke = poke_API + '0' + this.props.id + '.png';
        } else {
             imgPoke = poke_API + this.props.id + '.png';
        }
            return(
            <div className="Pokecard">
                    <h1 className="Pokecard-title">{this.props.name}</h1>
                    <img src={imgPoke}  alt={this.props.name} />
                    <div className="Pokecard-date"> Type: {this.props.type} </div>
                    <div className="Pokecard-date"> Exp: {this.props.exp} </div>
            </div>

        );
    }
}

export default Pokecard;