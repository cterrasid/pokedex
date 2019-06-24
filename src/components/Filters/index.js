import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = props => {
  const { filterByName, queryName } = props;

  return (
    <form className="filter">
      <label
        className="filter-name__label"
        htmlFor="filter-name"
        title="Find by name"
      >
        <input
          className="filter-name__input"
          id="filter-name"
          type="text"
          placeholder="Put the name of a pokemon"
          onChange={filterByName}
          queryName={queryName}
        />
      </label>
    </form>
  );
};

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  queryName: PropTypes.string.isRequired,
};

export default Filters;
