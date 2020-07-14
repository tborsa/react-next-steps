import React from 'react';
import {Route} from 'react-router-dom';
import Us from './Us';
import Dog from '../../Components/Dog';

export default [
  <Route key="about" path="/about">
    <Us/>
  </Route>,
  <Route key="dog" path="/dog">
    <Dog/>
  </Route>
]