import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.scss';

const Detail = props => {
  const { detail } = props;

  return (
    <div className="detail__container">
      {detail ? (
        <div className="detail__card">
          <h2 className="detail__card-title">{detail.name}</h2>
          <p className="detail__id">#{detail.id}</p>
          <div className="detail__image-wrapper">
            <img
              className="detail__image"
              src={detail.sprites.front_default}
              alt={detail.name}
            />
            <img
              className="detail__image"
              src={detail.sprites.back_default}
              alt={detail.name}
            />
          </div>
          <ul className="detail__types">
            {detail.types.map((type, index) => (
              <li key={`${detail.id + index}`} className="detail__types-type">
                {type.type.name}
              </li>
            ))}
          </ul>
          <h3 className="detail__profile-title">Profile</h3>
          <div className="detail__profile">
            <ul className="detail__profile-info">
              <li className="detail__profile-info--element">
                <strong>Height:</strong> {detail.height / 10} m
              </li>
              <li className="detail__profile-info--element">
                <strong>Weight:</strong> {detail.weight / 10} kg
              </li>
            </ul>
            <div className="detail__profile-abilities">
              Abilities:
              <ul className="detail__profile-abilities-list">
                {detail.abilities.map((ability, index) => (
                  <li
                    key={`${detail.id + index}`}
                    className="detail__profile-abilities-ability"
                  >
                    {ability.ability.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <progress className="loading">Loading...</progress>
      )}
      <Link to="/">Go back</Link>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Detail;
