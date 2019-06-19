import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import './styles.scss';

const List = props => {
  const { list, queryName } = props;

  return (
    <ul className="list__container">
      {list
        .filter(item =>
          item.name.toLowerCase().includes(queryName.toLowerCase()),
        )
        .map(item => {
          return (
            <li key={item.id}>
              <Card
                image={item.sprites.front_default}
                name={item.name}
                types={item.types}
                number={item.id}
              />
            </li>
          );
        })}
    </ul>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default List;
