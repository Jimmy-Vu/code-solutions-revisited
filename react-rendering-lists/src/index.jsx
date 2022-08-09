import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const pokedex = [
  { number: '001', name: 'Bulbasaur' },
  { number: '004', name: 'Charmander' },
  { number: '007', name: 'Squirtle' },
  { number: '025', name: 'Pikachu' },
  { number: '039', name: 'Jigglypuff' }
];

function ListItem(props) {
  return <li>{props.value}</li>;
}

function PokemonList(props) {
  const data = props.data;
  const list = data.map((pokemon) =>
    <ListItem key={pokemon.number} value={pokemon.name} />
  );
  return (
    <ul>
      {list}
    </ul>
  );
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <PokemonList data={pokedex} />
);
