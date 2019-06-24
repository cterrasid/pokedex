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
          <div className="detail__main-info">
            <h3 className="detail__main-info__id">#{detail.id}</h3>
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
          <h3 className="detail__profile-title">Profile</h3>
          <div className="detail__profile">
            <ul className="detail__profile-info">
              <li>
                <strong>Height:</strong> {detail.height / 10} m
              </li>
              <li>
                <strong>Weight:</strong> {detail.weight / 10} Kg
              </li>
            </ul>
            <ul className="detail__profile-abilities">
              <strong>Abilities:</strong>
              {detail.abilities.map((ability, index) => (
                <li key={`${detail.id + index}`}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Error</p>
      )}
      <Link to="/">Go back</Link>
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default Detail;
