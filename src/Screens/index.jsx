import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Cat from 'Components/Cat';
import About from './about';


const index = () => {
  return (
    <Switch>
      {
        [
          ...About,
        ]
      }
      <Route path="/"><Cat/></Route>
    </Switch>
  );
};

export default index;