import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';
import Dog from './Components/Dog';
import Cat from './Components/Cat';
import Screens from './Screens';
import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <h1>Our page</h1>

        <h2>Links</h2>
        <div style={{display: 'flex', justifyContent: "center"}}>
          <Link to="/cat">cat</Link>
        </div>
        <br></br>
        
        <Screens/>
      </div>
    </Router>
  );
}

export default App;
