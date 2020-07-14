import React from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Dog from 'Components/Dog';
import Cat from 'Components/Cat';
import Screens from 'Screens';
import DogContext from 'Context/DogContext';
import './App.css';

function App() {
  return (
    <DogContext.Provider value={['one', 'two', 'three']}>
      <Router>
        <h1>Title</h1>
        <Link to="/dog">dog</Link>
        <Link to="/cat">cat</Link>
        <a href="/dog">a dog</a>
        <a href="/cat">a cat</a>
        <Switch>
          <Route path="/dog/:id" ><Dog/></Route>
          <Route exact path="/cat" ><Cat/></Route>
        </Switch>
        <Screens/>
      </Router>
    </DogContext.Provider>
  );
}

export default App;
