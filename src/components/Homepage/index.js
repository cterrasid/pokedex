import React from 'react';
import PropTypes from 'prop-types';
import Filters from '../Filters';
import List from '../List';
import './styles.scss';

const Homepage = props => {
  const {
    id,
    name,
    frontImage,
    types,
    isLoading,
    queryName,
    filterByName,
  } = props;

  return (
    <div className="page__container">
      {isLoading ? (
        <progress className="loading">Loading...</progress>
      ) : (
        <main className="main__container">
          <Filters filterByName={filterByName} />
          <List
            id={id}
            name={name}
            frontImage={frontImage}
            types={types}
            filterByName={filterByName}
            queryName={queryName}
          />
        </main>
      )}
    </div>
  );
};

Homepage.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  frontImage: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  isLoading: PropTypes.bool.isRequired,
  queryName: PropTypes.string.isRequired,
  filterByName: PropTypes.func.isRequired,
};

export default Homepage;
