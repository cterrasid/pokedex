import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { fetchPokemonList, getUrl } from '../../services/pokedexService';
import Homepage from '../Homepage';
import Detail from '../Detail';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      isLoading: true,
      queryName: '',
    };

    this.filterByName = this.filterByName.bind(this);
    this.getCardDetails = this.getCardDetails.bind(this);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    fetchPokemonList().then(pokemon => {
      const { results } = pokemon;
      results.map(item => {
        let mainData = {};
        return getUrl(item.url).then(pokemonData => {
          mainData = pokemonData;
          return getUrl(pokemonData.species.url).then(speciesData => {
            const evolves = speciesData.evolves_from_species;
            mainData = {
              ...mainData,
              evolution: evolves ? evolves.name : '',
            };
            this.setState(state => {
              return {
                list: [...state.list.sort((a, b) => a.id - b.id), mainData],
                isLoading: false,
              };
            });
          });
        });
      });
    });
  }

  getCardDetails(id) {
    const { list } = this.state;
    return list.find(item => item.id === parseInt(id, 10));
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
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Homepage
                list={list}
                isLoading={isLoading}
                queryName={queryName}
                filterByName={this.filterByName}
              />
            )}
          />
          <Route
            path="/card-detail/:id"
            render={routerProps => (
              <Detail
                detail={this.getCardDetails(routerProps.match.params.id)}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
