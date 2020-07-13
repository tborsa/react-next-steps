import React from 'react';
import {Route} from 'react-router-dom';

const DisplayComponent = (props) => {
  return (
    <div>
      <h1>This page belongs to <strong>TAUSIF</strong></h1>
      <h2>Not passing any props here!!!</h2>
      <h2>Ping me anytime dude!!</h2>
      {/* <Route path="/home/tausif"/> */}
    </div>
  )
};

export default DisplayComponent;