import React from 'react';
import {Route} from 'react-router-dom';

const Evelyn = (props) => {
  return (
    <div>
      <h1>Hello</h1>
      
       <Route path="/home/evelyn" component={() => (<h1> Evelyn </h1>)} />
    </div>
  );
};

export default Evelyn;