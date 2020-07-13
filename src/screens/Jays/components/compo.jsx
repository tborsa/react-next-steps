import React from 'react';
import {Route} from 'react-router-dom'
import Myname from './Myname';

const Compo = (props) => {
  return (
    <div>
       <Route path="/home/js" component={() => (<h1>js</h1>)} />
    </div>
  );
};

export default Compo