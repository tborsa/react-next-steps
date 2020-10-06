import React, { useContext } from 'react';
import { useParams, Route } from 'react-router-dom';

import dogContext from "../Contexts/dogContext";

const Cats = () => {
  const {dogsList} = useContext(dogContext);
  return (
    <>
      <h1>Cats 🐈 😺</h1>
      {dogsList.map((name) => <h3>{name}</h3>)}
    </>
  )
};

export default Cats;