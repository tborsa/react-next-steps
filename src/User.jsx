import React from 'react';
import {Link, useParams, useHistory } from 'react-router-dom';

const User = () => {
  const params = useParams();
  const history = useHistory();

  if (params.id == 100) {
    history.push('/about');
  }

  return (
    <div>
      <h1>User</h1>
      <p> this is the user page for user: {params.id}</p>
    </div>
  );
};

export default User;