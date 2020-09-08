import React, {useContext} from 'react';
import DogContext from '../../Contexts/dogContext';

const Show = () => {
  const {dogList, addDog} = useContext(DogContext);
  return (
    <div>
      <h1> This is the Dogs page 🐕🐩🐶 </h1>
      <p>{dogList}</p>
      <button onClick={() => addDog(' A new Dog')}>Add a new dog</button>
    </div>
  );
};

export default Show;