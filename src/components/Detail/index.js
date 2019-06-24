import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Detail = props => {
  const { detail } = props;
  console.log(detail);

  return (
    <Fragment>
      {detail ? (
        <div className="detail__container">
          <div className="detail__main-wrapper">
            <h2>{detail.name}</h2>
            <h3>#{detail.id}</h3>
            <img
              className="detail__image front"
              src={detail.sprites.front_default}
              alt={detail.name}
            />
            <img
              className="detail__image back"
              src={detail.sprites.back_default}
              alt={detail.name}
            />
            <ul className="detail__types">
              {detail.types.map((type, index) => (
                <li key={`${detail.id + index}`} className="detail__types-type">
                  {type.type.name}
                </li>
              ))}
            </ul>
          </div>
          <ul className="detail__profile">
            <h3 className="detail__profile-title">Profile</h3>
            <li>
              <strong>Height:</strong> {detail.height / 10} m
            </li>
            <li>
              <strong>Weight:</strong> {detail.weight / 10} Kg
            </li>
            <ul>
              <strong>Abilities:</strong>
              {detail.abilities.map((ability, index) => (
                <li
                  key={`${detail.id + index}`}
                  className="detail__profile-abilities"
                >
                  {ability.ability.name}
                </li>
              ))}
            </ul>
          </ul>
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
