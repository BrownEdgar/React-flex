import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.name}</td>
      <td>{user.age}</td>
    </tr>
  );
};

User.propTypes = {
  user: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
  }).isRequired,
};

export default User;
