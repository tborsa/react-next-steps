import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dogs from './Dogs';
import Countries from './Countries';
import Monsters from './monsters';
import Garfield from './Garfield';
import Pikachu from './Pikachu';
import Fruits from './Fruits';
import Robots from './Robots';
import Tetras from './Tetras';

const index = () => {
  return (
    <Switch>
      {
        [
          // Spread out your screens sub routes here
          ...Dogs,
          ...Countries,
          ...Monsters,
          ...Garfield,
          ...Pikachu,
          ...Robots,
          ...Tetras,
          ...Fruits
        ]
      }
    </Switch>
  );
};

export default index;