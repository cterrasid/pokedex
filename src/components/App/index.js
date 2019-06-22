import React, { PureComponent } from 'react';
import { fetchPokemonList, fetchAnyUrl } from '../../services/pokedexService';
import Homepage from '../Homepage';
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
    fetchPokemonList().then(data => {
      const { results } = data;
      results.map(item => {
        return fetchAnyUrl(item.url).then(pokeList => {
          this.setState(state => {
            return {
              list: [...state.list.sort((a, b) => a.id - b.id), pokeList],
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
      <div className="app__container">
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <Homepage
            list={list}
            queryName={queryName}
            filterByName={this.filterByName}
          />
        )}
      </div>
    );
  }
}

export default App;
