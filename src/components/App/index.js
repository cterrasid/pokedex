import React, { PureComponent } from 'react';
import { fetchPokemonList } from '../../services/pokedexService';
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
    fetchPokemonList()
      .then(res => {
        const { results } = res;
        for (const item of results) {
          const { url } = item;
          fetch(url)
            .then(res => res.json())
            .then(pokeList => {
              this.setState(state => {
                return {
                  list: [...state.list, pokeList],
                  isLoading: false,
                };
              });
            })
        }
      })
      .catch(error => {
        console.error('SOMETHING IS NOT WORKING:', error);
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
