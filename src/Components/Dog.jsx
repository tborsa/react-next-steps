import React, {useContext} from 'react';
import {useParams} from 'react-router-dom';
import DogContext from 'Context/DogContext';
const Dog = () => {
  const dogs = useContext(DogContext);
  const {id} = useParams();
  return (
    <div>
      {dogs[id]}
      <h1>🐕</h1>
    </div>
  );
};

export default Dog;