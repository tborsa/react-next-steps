import React from 'react';
import {useHistory} from 'react-router-dom';

const About = () => {
  const history = useHistory();

  const showCat = () => {
    history.push('/cat');
  }

  return (
    <div>
      <h1 onClick={showCat}>About</h1>
    </div>
  );
};

export default About;