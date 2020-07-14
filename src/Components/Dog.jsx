import React, {useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import DogContext from '../Contexts/DogContext';

const Dog = () => {
  const params = useParams();
  const history = useHistory();
  const {dogList, addDog} = useContext(DogContext);
  let thing = 5;
  const toCat = () => {
    //logic
    history.push('/cat');
  }
  // console.log('what am i ', params);
  return (
    <h1>
      🐕
      {dogList.map(dog => <h3>{dog}</h3>)}
      <button onClick={() => {addDog('spot')}}>Add spot</button>
      <span onClick={toCat}>{params.id}</span>
    </h1>
  );
};

export default Dog;