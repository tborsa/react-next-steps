import React from 'react';
import { Route } from 'react-router-dom';
import Dogs from '../../Components/Dogs';

export default [
  <Route key="NotCats" path="/notCats">
    <h3>{'Not'}</h3>
    <Dogs />
  </Route>
]