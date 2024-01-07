import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonPickup from './PokemonPickup';
import PokemonList from './PokemonList';

function PokemonData() {
  const [pokemonData, setPokemonData] = useState([]);
  const [randomPokemon, setRandomPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // ポケモンの数を取得
        const responseCount = await axios.get('https://pokeapi.co/api/v2/pokemon-species/');
        const pokemonCount = responseCount.data.count;

        const promises = [];

        // ポケモンの数を使ってURLを構築
        for (let i = 1; i <= pokemonCount; i++) {
          const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
          promises.push(axios.get(url));
        }

        // ポケモン情報を取得し、結果をセット
        const responses = await Promise.all(promises);
        const data = responses.map(response => response.data);
        setPokemonData(data);

        // ランダムなポケモンを選択
        const randomIndex = Math.floor(Math.random() * pokemonCount);
        setRandomPokemon(data[randomIndex]);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
        
  return (
    <>
      {randomPokemon && (
        <PokemonPickup 
          id={randomPokemon.id}
          name={randomPokemon.name}
          imageUrl={randomPokemon.sprites.other['official-artwork'].front_default}
        />
      )}

      <div style={{ margin: '0 10px 0 10px' }}>
        <h2>List</h2>
        <p>Total Pokemon: {pokemonData.length}</p>
        {pokemonData.map((pokemon, index) => (
          <PokemonList 
            key={index}
            name={pokemon.name}
            imageUrl={pokemon.sprites.other['official-artwork'].front_default}
          />
        ))}
      </div>
    </>
  );
}

export default PokemonData;