import React from 'react'
import './PokemonPickup.css';

function PokemonPickup({ id, name, imageUrl }) {

    return (
      <div className='pickup' style={{ padding: '4px 10px 20px 10px' }}>
        <h2>Pickup</h2>
        <div style={{ height: '250px', padding: '10px 0', display: 'flex', 'align-items': 'center', margin: '0 20%' }}>
          <img src={imageUrl} 
            style={{ height: 240, margin: '5px 100px 5px 0' }}
          />
          <div style={{ 'background-color': '#FFF', width: 600, height: 200, padding: '20px 30px', 'line-height': 5, 'border-radius': 10, 'box-shadow': '5px 5px #CCC' }}>
            <p style={{ 'font-size': 20, 'font-weight': 'bold' }}>No.{id}</p>
            <p style={{ 'font-size': 28, 'font-weight': 'bold' }}>{name}</p>
            <p style={{ 'padding-top': 10 }}>hoge</p>
          </div>
        </div>
      </div>
    );
}

export default PokemonPickup;