import React, { Component } from 'react';
import './Pokecard.css';

const poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' 

class Pokecard extends Component{
    render(){
        
        const poke = poke_API + this.props.id + '.png';

        return(
            <div className="Pokecard">
                    <h1>{this.props.name}</h1>
                    <img src={poke}  alt={this.props.name} />
                     <div> Type: {this.props.type} </div>
                     <div> Exp: {this.props.exp} </div>
            </div>

        //    <ul>
        //        {cards.map( c => <li> {c.text}
        //        </li>)}
        //    </ul>
        );
    }
}

export default Pokecard;