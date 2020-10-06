import React from 'react';
import { Switch } from 'react-router-dom';
import Cats from './Cats';
import Dogs from './Dogs';
import Trees from './Trees';
import Halloween from './Halloween';
import Plants from './Plants';
import NotCats from './NotCats';
import N64 from './N64';
// import Fruits from './fruits';
import Fishes from './Fishes';
import Books from './Books';
import PS4 from './PS4';
import Things from './Things';
import Snails from './Snails';
import Yooooo from './Yooooo';
import Yoo from './Yoo'
import Cop from './Cop';

const Screens = () => {
  return (
    <Switch>
      {
        [
          // ADD SCREENS HERE ++++
          ...Cats,
          ...Dogs,
          ...Halloween,
          ...Trees,
          ...Plants,
          ...NotCats,
          ...N64,
          ...NotCats,
          ...Books,
          ...Snails,
          // ...Fruits,
          ...Fishes,
          ...PS4,
          ...Yoo,
          ...Things,
          ...Yooooo,
          ...Cop,
          // +++++++++++++++++++++
        ]
      }
    </Switch>
  );
};

export default Screens;