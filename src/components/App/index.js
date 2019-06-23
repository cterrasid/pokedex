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
  }

  componentDidMount() {
    this.getPokemonList();
  }

  getPokemonList() {
    fetchPokemonList().then(data => {
      const { results } = data;
      results.map(item => {
        return getUrl(item.url).then(pokeList => {
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
              <Detail match={routerProps.match} list={list} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
