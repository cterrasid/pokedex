import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Card = props => {
  const { frontImage, name, types, number } = props;

  return (
    <div className="card__container">
      <div className="card__image-wrapper">
        <img
          className="card__image"
          src={frontImage.front_default}
          alt={name}
        />
        <p className="card__number">ID/{number}</p>
      </div>
      <div className="card__info-wrapper">
        <p className="card__name">{name}</p>
        <ul className="card__types">
          {types.map((type, index) => (
            <li key={`${number + index}`} className="card__types-type">
              {type.type.name}
            </li>
          ))}
        </ul>
        {/* {evolves ? (
          <p className="card__evolution">
            Evolves from:<p className="card__evolution-evolves">{evolves}</p>
          </p>
        ) : (
          <p className="card__evolution">Pre-evolution</p>
        )} */}
      </div>
    </div>
  );
};

Card.propTypes = {
  frontImage: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.object).isRequired,
  number: PropTypes.number.isRequired,
};

export default Card;
