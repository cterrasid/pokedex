import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';

const Homepage = props => {
  const { list, isLoading, queryName, filterByName } = props;

  return (
    <div className="page__container">
      {isLoading ? (
        <progress className="loading">Loading...</progress>
      ) : (
        <main className="main__container">
          <Filters filterByName={filterByName} />
          <List list={list} filterByName={filterByName} queryName={queryName} />
        </main>
      )}
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
