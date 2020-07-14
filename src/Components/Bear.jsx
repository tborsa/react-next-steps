import React, {useContext} from 'react';
import DogContext from '../Contexts/DogContext';
const Bear = () => {
  const {dogList, addDog} = useContext(DogContext);
  return (
    <div>
      {/* here */}
      <h1>BEAR</h1>
      {dogList.map(dog => <h3>{dog}</h3>)}
      🐻
    </div>
  );
};

export default Bear;