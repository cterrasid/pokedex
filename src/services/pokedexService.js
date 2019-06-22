const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0';

const fetchPokemonList = () => fetch(URL).then(res => res.json());
const fetchAnyUrl = anyURL => fetch(anyURL).then(res => res.json());

export { fetchPokemonList, fetchAnyUrl };
