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
    fetchPokemonList().then(data => {
      const { results } = data;
      results.map(item => {
        return fetch(item.url)
          .then(res => res.json())
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
      <div className="app__container">
        <header className="header__container">
          <div className="header__triangle-left"></div>
          <div className="header__triangle-right"></div>
        </header>
        {isLoading ? (
          <p className="loading">Loading...</p>
        ) : (
          <main className="main__container">
            <Filters filterByName={this.filterByName} />
            <List
              list={list}
              filterByName={this.filterByName}
              queryName={queryName}
            />
          </main>
        )}
        <footer className="footer__container">
          <div className="footer__circle-left"></div>
          <div className="footer__circle-right"></div>
        </footer>
      </div>
    );
  }
}

export default App;
