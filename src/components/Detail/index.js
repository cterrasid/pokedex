import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Detail = props => {
  const { match, list } = props;
  return (
    <div className="detail__background">
      {list ? (
        <div className="detail__container">{match.params.id}</div>
      ) : (
        <p>There are not elements for this query</p>
      )}

      <Link to="/">Back</Link>
    </div>
  );
};

Detail.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  match: PropTypes.string.isRequired,
};

export default Detail;
