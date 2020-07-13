import React from 'react';
import {Route} from 'react-router-dom';

const Alice = (props) => {
  return (
    <div>
      <h1>HIIIII</h1>
      
       <Route path="/home/alice" component={() => (<h1>me</h1>)} />
    </div>
  );
};

export default Alice;