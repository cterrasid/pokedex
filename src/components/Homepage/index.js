import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';

const Homepage = props => {
  const { list, isLoading, queryName, filterByName } = props;

  return (
    <div className="page__container">
      <header className="header__container">
        <div className="header__triangle-left"></div>
        <div className="header__triangle-right"></div>
      </header>
      {isLoading ? (
        <progress className="loading">Loading...</progress>
      ) : (
        <main className="main__container">
          <Filters filterByName={filterByName} />
          <List list={list} filterByName={filterByName} queryName={queryName} />
        </main>
      )}
      <footer className="footer__container">
        <div className="footer__circle-left"></div>
        <div className="footer__circle-right"></div>
      </footer>
    </div>
  );
};

Homepage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  queryName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired,
};

export default Homepage;
