import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {

  const { image, name } = props;

  return (
    <div>
      <p>{name}</p>
      <img src={image.sprites} alt={name}/>
    </div>
  )

}

Card.propTypes = {
  image: PropTypes.objectOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
}

export default Card;
