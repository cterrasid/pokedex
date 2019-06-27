import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from '../Card';
import './styles.scss';

const List = props => {
  const { id, name, frontImage, types, queryName } = props;

  return (
    <ul className="list__container">
      {name
        .filter(item => item.toLowerCase().includes(queryName.toLowerCase()))
        .map(() => {
          return (
            <li key={id}>
              <Link to={`/card-detail/${id}`}>
                <Card
                  frontImage={frontImage}
                  name={name}
                  types={types}
                  number={id}
                />
              </Link>
            </li>
          );
        })}
    </ul>
  );
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  frontImage: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.string).isRequired,
  queryName: PropTypes.string.isRequired,
};

export default List;
