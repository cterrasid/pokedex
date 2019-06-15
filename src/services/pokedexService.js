const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25';
const imgURL = 'https://pokeapi.co/api/v2/pokemon-form/';

const fetchPokemonList = () => fetch(URL).then(res => res.json());

const fetchImage = () => fetch(imgURL).then(res => res.json());


export { fetchPokemonList, fetchImage };
