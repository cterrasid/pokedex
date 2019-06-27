const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0';

const getMainData = () => fetch(URL).then(res => res.json());
// async function getMainData() {
//   const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=25&offset=0';
//   const response = await fetch(URL);
//   const json = await response.json();
// }

// async function getUrl(url) {
//   const response = await fetch(url);
//   const json = await response.json();
// }

const getUrl = anyUrl => fetch(anyUrl).then(res => res.json());

export { getMainData, getUrl };
// export { getMainData, getUrl };
