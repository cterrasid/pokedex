import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = props => {
  const { image, name, types, number } = props;

  return (
    <div className="card__container">
      <img className="card__image" src={image} alt={name} />
      <p>ID/{number}</p>
      <p className="card__name">{name}</p>
      <ul className="card__types">
        {types.map(type => (
          <li>{type.type.name}</li>
        ))}
      </ul>
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
