import React from 'react';
import {Route} from 'react-router-dom';

const subject_01 = (props) => {
  return (
    <div>
      <h1>Project Superman Experinentation</h1>
      <p>Official Name: Project Superman</p>
      <p>Status: Defunct</p>
      <p>Identity: Secret</p>
      <p>Base of operations: Metropolis</p>
      <p>Univerise: Flashpoint Paradox</p>
      
       <Route path="/home/subject_01" component={(bruce_wayne) => (<h1></h1>)} />
    </div>
  );
};

export default subject_01;