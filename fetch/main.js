fetch('https://pokeapi.co/api/v2/pokemon/2/', {method: 'GET'})
  .then(res => res.json())
  .then(data => console.log(data));
