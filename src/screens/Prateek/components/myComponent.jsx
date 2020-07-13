import React from 'react';
import {Route} from 'react-router-dom';

const component = (props) => {
  return (
    <div>
      <h1> Prateek </h1>
      <h2> Hola ! </h2>

      <Route path="/prateek" component={() =>
      (<h1>hi</h1>)} />
    </div>
  );
};

export default component;