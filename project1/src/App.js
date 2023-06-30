import React, { useState } from 'react';
import './App.css';

const PokemonCard = ({ name, image, abilities }) => {
  const [showAbilities, setShowAbilities] = useState(false);

  const handleMouseEnter = () => {
    setShowAbilities(true);
  };

  const handleMouseLeave = () => {
    setShowAbilities(false);
  };

  return (
    <div className="pokemon-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      {showAbilities && (
        <ul>
          {abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      )}
    </div>
  );
};


const App = () => {
  const pokemonData = [
    {
      name: "Bulbasaur",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
      abilities: [ 'overgrow', 'chlorophyll' ],
    },
    {
      name: "Charmander",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
      abilities: [ 'blaze', 'solar-power' ],
    },
    {
      name: "Squirtle",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
      abilities: [ 'torrent', 'rain-dish' ],

    },
    {
      name: "Pikachu",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      abilities: [ 'static', 'lightning-rod' ],
    },
    {
      name: "Jigglypuff",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
      abilities: [ 'cute-charm', 'competitive', 'friend-guard' ],
    },
    {
      name: "Eevee",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
      abilities: [ 'run-away', 'adaptability', 'anticipation' ],

    },
    {
      name: "Mew",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
      abilities: [ 'synchronize', 'no-guard' ],
    },
    {
      name: "Chikorita",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
      abilities: [ 'overgrow', 'leaf-guard' ],

    },
    {
      name: "Cyndaquil",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
      abilities: [ 'blaze', 'flash-fire' ],

    },
    {
      name: "Totodile",
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
      abilities: [ 'torrent', 'sheer-force' ],

    }
    


    

  ];

  return (
    <div className="App">
      <h1>Pokemon Cards</h1>
      <div className="pokemon-container">
        {pokemonData.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon.name}
            image={pokemon.image}
            abilities={pokemon.abilities}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
