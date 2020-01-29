import React, {useState} from 'react';


const useDogs = (initialDogs) => {
  const [dogs, setDogs] = useState(initialDogs);

  const addDog = (dog) => {
    setDogs((oldDogs) => [...oldDogs, dog]);
  }

  return {
    dogs, 
    addDog
  }
}

export default useDogs;