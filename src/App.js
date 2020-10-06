import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Screens from './Screens';
import dogContext from './Contexts/dogContext';

import './App.css';


function App() {
  const [dogsList, setDogsList] = useState(['roofus', 'spots', 'scruffy']);
  return (
    <dogContext.Provider value={{dogsList, setDogsList}}>
      <Router>
        <h1>App</h1>
        {/* Add Links Here ++++++  NAV*/}
        <div style={{ display: 'flex', margin: '20px', width: '100%', justifyContent: 'space-around' }}>
          <Link to="/dogs">Dogs</Link>
          <Link to="/cats">cats</Link>
          <Link to="/halloween">Halloween</Link>
          <Link to="/fishes">Fishes</Link>
          <Link to="/trees">Trees</Link>
          <Link to="/books">Books</Link>
          <Link to="/PS4">PS4</Link>
          <Link to="/emoji">emoji</Link>
          <Link to="/notcats">notcats</Link>
          <Link to="/snails">SNAILS</Link>
          <Link to="/fruits">Fruits</Link>
          <Link to="/n64">N64</Link>
          <Link to="/Things">Things</Link>
          <Link to="/Plants">Plants</Link>
          <Link to="/Cop">Cop</Link>
        </div>
        {/* +++++++++++++++++++++++ */}

        <div style={{ padding: '100px' }}>
          <Screens />
        </div>

        {/* FOOTER */}
      </Router>
    </dogContext.Provider>
  );
}

export default App;
