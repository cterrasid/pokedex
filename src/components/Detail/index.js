import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Detail = props => {
  const { detail } = props;

  return (
    <div className="detail__container">
      {detail ? (
        <img src={detail.sprites.front_default} alt={detail.name} />
      ) : (
        <p>Error</p>
      )}
      <Link to="/">Back</Link>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Detail;
