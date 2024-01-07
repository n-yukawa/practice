import React from 'react'
import './App.css';
import PokemonData from './PokemonData';

function App() {
  // const font = css`
  //   text-transform: none;
  // `;
  return (
    <div>
        <header>
          <h1 className='header-logo'>ポケモン図鑑</h1>
        </header>
        <PokemonData/>
    </div>
  );
}

export default App;
