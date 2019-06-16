import React from 'react';
import PropTypes from 'prop-types';

const Filters = props => {
  const { filterByName, queryName } = props;

  return (
    <form>
      <label htmlFor="filter-name">
        Find by <strong>name</strong>
        <input
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
