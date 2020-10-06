import React from 'react';
import { Route } from 'react-router-dom';
import Things from '../../Components/Things'

export default [
  <Route key="Things" path="/Things">
    <Things things={"🍠 🔥"}  />
  </Route>
]