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
      abilities: [ 'overgrow', 'chlorophyll' ]
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
