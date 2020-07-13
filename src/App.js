import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import AppContext from './context/AppContext';

//get routes
import contactRoutes from './screens/contact/routes';
import bobRoutes from './screens/bob_ross/routes';
import tausifRoute from './screens/Tausif/routes';
import HappyPath from './screens/happypath/routes';
import evelynRoutes from './screens/Evelyn/routes';
import HelloButtonRoutes from "./screens/fred/routes/HelloButtonRoute";
import Alice from "./screens/alice/routes";
// import prateek from "./screens/Prateek/routes/index";
import useDogs from './screens/contact/hooks/useDogs';


function App() {
  const dogs = useDogs(['roofus', 'spotter', 'boogey', 'ben']);
  return (
    <AppContext.Provider value={{dogs: dogs, data: 'sdfsf'}}>
      <Router>
        <h1>This is our app</h1>
        <div className="menu">
            <Link to="/contact">Contact</Link>
            <Link to="/tausif">Tausif</Link>  
            <Link to="/fred">Fred</Link>  
            <Link to="/bob">Bob the Ross</Link>
            <Link to="/alice">Alice</Link>
            <Link to="/happypath">Happy Path</Link> 
            {/* <Link to="/prateek">Prateek</Link>   */}
            <Link to="/mounika">Mounika</Link>    
            <Link to="/evelyn">Evelyn</Link>
        </div>
        <Switch>
          {[
            ...contactRoutes,
            ...bobRoutes,
            ...tausifRoute,
            ...evelynRoutes,
            ...HelloButtonRoutes,
            ...HappyPath,
            ...Alice
          ]}
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;