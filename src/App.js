import React, {useState} from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';
// import Pangolins from './Components/Pangolins';
import DogContext from './Contexts/DogContext';
import Screens from './Screens';
import './App.css';             

function App() {
  const [dogList, setDogList] = useState(['roofus', 'spot', 'fluuffers'])
  const addDog = (dog) => {
    setDogList(dogs => ([...dogs, dog]));
  }
  return (
    <Router>
      <DogContext.Provider value={{dogList, addDog}}>
        <div className="App">
          <h1>Our page</h1>

          <h2>Links</h2>
          <div style={{display: 'flex', justifyContent: "center"}}>
            <Link to="/cat">cat</Link>
            <Link to="/poutine">🇨🇦Delicious POUTINE!!!🇨🇦</Link>
            <Link to="/pangolins">Pangolin Gang</Link>
            <Link to="/ferret">Ferrets for lyffffeeeeeee!</Link>
            <Link to="/Bear"> 🐻🐻BEAAAAAARS 🐻🐻</Link>
          </div>
          <br></br>
          





          <Screens/>
        </div>
      </DogContext.Provider>
    </Router>
    

  );
}

export default App;
