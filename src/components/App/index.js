import React, { PureComponent } from 'react';
import fetchPokemonList from '../../services/pokedexService';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
      queryName: '',
    };

    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    fetchPokemonList().then(res => {
      const { results } = res;
      results.map(item => {
        return fetch(item.url)
          .then(response => response.json())
          .then(pokeList => {
            this.setState(state => {
              return {
                list: [...state.list, pokeList],
                isLoading: false,
              };
            });
          });
      });
    });
  }

  filterByName(event) {
    const inputValue = event.currentTarget.value;
    this.setState({
      queryName: inputValue,
    });
  }

  render() {
    const { list, isLoading, queryName } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <main>
            <Filters filterByName={this.filterByName} />
            <List
              list={list}
              filterByName={this.filterByName}
              queryName={queryName}
            />
          </main>
        )}
      </div>
    );
  }
}

export default App;
