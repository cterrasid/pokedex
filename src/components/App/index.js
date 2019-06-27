import React, { PureComponent } from 'react';
import { Route, Switch } from 'react-router-dom';
import { getMainData, getUrl } from '../../services/pokedexService';
import Homepage from '../Homepage';
import Detail from '../Detail';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
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
    this.getCardDetails = this.getCardDetails.bind(this);
  }

  componentDidMount() {
    this.getPokemonList();
  }

  async getPokemonList() {
    const firstCall = getMainData();
    const data = await firstCall;
    const list = data.results.map(info => getUrl(info.url));
    const mainData = await Promise.all(list);
    mainData.map(mainProperties =>
      this.setState({
        list: mainProperties,
      }),
    );
  }

  // getPokemonList() {
  //   getMainData().then(pokemon => {
  //     const { results } = pokemon;
  //     results.map(item => {
  //       let mainData = {};
  //       return getUrl(item.url).then(pokemonData => {
  //         mainData = pokemonData;
  //         return getUrl(pokemonData.species.url).then(speciesData => {
  //           const evolves = speciesData.evolves_from_species;
  //           mainData = {
  //             ...mainData,
  //             evolution: evolves ? evolves.name : '',
  //           };
  //           this.setState(state => {
  //             return {
  //               list: [...state.list.sort((a, b) => a.id - b.id), mainData],
  //               isLoading: false,
  //             };
  //           });
  //         });
  //       });
  //     });
  //   });
  // }

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
      <div className="app">
        <Header />
        <div className="app__container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Homepage
                  id={list.id}
                  name={list.name}
                  frontImage={list.sprites}
                  types={list.types}
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
                  // frontImage={list.sprites.front_default}
                  // backImage={list.sprites.back_default}
                  name={list.name}
                  types={list.types}
                  species={list.species}
                  stats={list.stats}
                  height={list.height}
                  weight={list.weight}
                />
              )}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
