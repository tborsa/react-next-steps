import React, { useContext } from 'react';
import { useParams, Route } from 'react-router-dom';

import dogContext from "../Contexts/dogContext";

const Dogs = () => {
  const {dogsList, setDogsList} = useContext(dogContext);
  const { id } = useParams();

  return (
    <>
      <h1 onClick={() => setDogsList(prev => [...prev, 'new dog'])}>Dogs 🐩 🦮</h1>
      {dogsList.map((name) => <h3>{name}</h3>)}
    </>
  )
};

export default Dogs;