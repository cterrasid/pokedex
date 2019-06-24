import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Detail = props => {
  const { detail } = props;

  return (
    <Fragment>
      {detail ? (
        <div className="detail__container">
          <div className="detail__image-container">
            <img
              className="detail__image"
              src={detail.sprites.front_default}
              alt={detail.name}
            />
          </div>
          <p>{detail.name}</p>
          <p>{detail.height}</p>
          <p>{detail.weight}</p>
        </div>
      ) : (
        <p>Error</p>
      )}
      <Link to="/">Go back</Link>
    </Fragment>
  );
};

Detail.propTypes = {
  detail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Detail;
