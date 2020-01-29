import React from 'react';
import {Route} from 'react-router-dom';

const mounika = (props) => {
  return (
    <div>
      <h1>Hiii</h1>
      
       <Route path="/home/mounika" component={() => (<h1>Home page</h1>)} />
    </div>
  );
};

export default mounika;