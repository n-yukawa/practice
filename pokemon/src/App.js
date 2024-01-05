import React from 'react'
import './App.css';
import PokemonList from "./PokemonList";
import PokemonPickup from "./PokemonPickup";
import PokemonData from './PokemonData';

function App() {
  // const font = css`
  //   text-transform: none;
  // `;

  return (
    <div className='App'>
        <h1>ポケモン図鑑</h1>
        <PokemonPickup />
        <PokemonData />
    </div>
  );
}

export default App;
