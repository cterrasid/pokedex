import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { image, name, types, number } = props;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={name} />
      <ul>
        {types.map(type => (
          <li>{type.type.name}</li>
        ))}
      </ul>
      <p>ID/{number}</p>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  number: PropTypes.number.isRequired,
};

export default Card;
