import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import Screens from './Screens';
import DogContext from './Contexts/dogContext';

import './App.css';

function App() {
  // create a function
  // compute a value
  const [dogList, setDogList] = useState(['sam', 'roof', 'floof']);
  const addDog = (dog) => {
    setDogList(currentList => [...currentList, dog]);
  }
  return (
    <Router>
      <DogContext.Provider value={{dogList, addDog}}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1>Header</h1>
          {/* Add links to your screen here */}
          <Link to="/dogs">Dogs</Link>
          <Link to="/garfield">Garfield</Link>
          <Link to="/tetras">Tetras</Link>
          <Link to="/monsters">Monsters</Link>
          <Link to="/pikachu">Pikachu</Link>
          <Link to="/countries">Countries</Link>
          <Link to="/robots">Robots</Link>
          <Link to="/fruits">fruits</Link>
        </div>
        <Screens />
        <h1>Footer</h1>
      </DogContext.Provider>
    </Router>
  );

}

export default App;
