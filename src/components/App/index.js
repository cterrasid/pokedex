import React, { PureComponent } from 'react';
// import { fetchPokemonList, fetchImage } from '../../services/pokedexService';
import List from '../List';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=25')
      .then(pokeRes => pokeRes.json())
      .then(pokeData => {
        const { results } = pokeData;
        const newPokeList = results.map((item, index) => {
          return { ...item, id: index + 1 };
        });
        this.setState({
          list: newPokeList,
          isLoading: false,
        });
        return fetch(
          'https://pokeapi.co/api/v2/pokemon-form/' + results[0] + '/',
        );
      })
      .then(imageResponse => imageResponse.json())
      .then(imageData => {
        return imageData.sprites.front_default;
      });
  }

  render() {
    const { list, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <List list={list} />
      </div>
    );
  }
}

export default App;
