import React, { PureComponent } from 'react';
import {fetchPokemonList} from '../../services/pokedexService'
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
    fetchPokemonList().then(data => {
      const newPokemonList = data.map((url, name, index) => {
        return { ...url, ...name, id: index + 1 };
      });

      this.setState({
        list: newPokemonList,
        isLoading: false,
      })
    });
  }

  render() {
    return <div>App</div>;
  }
}

export default App;
