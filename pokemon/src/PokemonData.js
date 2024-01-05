import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonList from './PokemonList';

function PokemonData() {
  const [imageUrl, setImageUrl ] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        //ポケモン情報取得
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/25');

        //画像
        const officialArtwork = response.data.sprites.other['official-artwork'];
        const imageUrl = officialArtwork.front_default;
        setImageUrl(imageUrl);


        // ポケモン種族情報取得
        const speciesUrl = response.data.species.url;
        const responseSpecies = await axios.get(speciesUrl);

        // 名前
        const names = responseSpecies.data.names;
        const nameObject = names.find((v) => v.language.name === "ja");
        const name = nameObject ? nameObject.name : ''; // 見つかった場合のみ設定
        setName(name);

      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
        
  return (
    <div>
      <PokemonList 
        name={name}
        imageUrl={imageUrl}
      />
    </div>
  );
}

export default PokemonData;
