import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const List = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(item => {
        return (
          <li key={item.id}>
            <Card image={item.sprites.front_default} name={item.name} />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
