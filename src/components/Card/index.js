import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = props => {
  const { image, name, types, number } = props;

  return (
    <div className="card__container">
      <div className="card__image-wrapper">
        <img className="card__image" src={image} alt={name} />
        <p className="card__number">ID/{number}</p>
      </div>
      <div className="card__info-wrapper">
        <p className="card__name">{name}</p>
        <ul className="card__types">
          {types.map(type => (
            <li className="card__types-type">{type.type.name}</li>
          ))}
        </ul>
      </div>
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
