import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';

const List = props => {
  const { list } = props;

  return (
    <ul>
      {list.map(item => {
        return (
          <li>
            <Card image={item.url} name={item.name} />
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default List;
