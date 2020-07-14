import React from 'react';
import {Switch} from 'react-router-dom';
import About from './About';
import Cats from './Cats';
import Poutine from './Poutine';
import Pangolins from './Pangolins';
import Ferrets from './Ferrets';
import Bear from './Bear';

const Screens = () => {
  return (
    <Switch>
      {
        [
          ...About,
          ...Cats,
          ...Poutine,
          ...Pangolins,
          ...Ferrets,
          ...Bear
        ]
      }
    </Switch>
  );
};

export default Screens;