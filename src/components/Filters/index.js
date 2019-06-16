/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Filters = props => {
  const { filterByName, queryName } = props;

  return (
    <form className="filter">
      <label className="filter-name__label" htmlFor="filter-name">
        Find by name
      </label>
      <input
        className="filter-name__input"
        id="filter-name"
        type="text"
        placeholder="Put the name of a pokemon"
        onChange={filterByName}
        queryName={queryName}
      />
    </form>
  );
};

Filters.propTypes = {
  filterByName: PropTypes.func.isRequired,
  queryName: PropTypes.string.isRequired,
};

export default Filters;
