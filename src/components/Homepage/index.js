import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';

const Homepage = props => {
  const { list, queryName, filterByName } = props;

  return (
    <div classNameN="page__container">
      <header className="header__container">
        <div className="header__triangle-left"></div>
        <div className="header__triangle-right"></div>
      </header>
      <main className="main__container">
        <Filters filterByName={filterByName} />
        <List list={list} filterByName={filterByName} queryName={queryName} />
      </main>
      <footer className="footer__container">
        <div className="footer__circle-left"></div>
        <div className="footer__circle-right"></div>
      </footer>
    </div>
  );
};

Homepage.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired,
};

export default Homepage;
