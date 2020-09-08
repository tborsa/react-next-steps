import React, {useContext} from 'react';
import DogContext from '../../Contexts/dogContext';

const Show = () => {
  const {dogList, addDog} = useContext(DogContext);
  return (
    <div>
      <p>{dogList}</p>
      <h1> Fruits . 🍉. They are important. </h1>
      <img src="https://img1.cgtrader.com/items/121546/8344ed22ce/funny-fruits-3d-model-obj-fbx.png" alt="fruits"/>
    </div>
  );
};

export default Show;