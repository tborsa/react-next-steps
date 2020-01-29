import React, {useContext, useRef} from 'react';
import {Route} from 'react-router-dom';
import AppContext from '../../../context/AppContext';
import { useEffect } from 'react';

const Contact = (props) => {
  const {dogs} = useContext(AppContext);
  const ref = useRef();
  const ref2 = useRef();
  useEffect(() => {
    dogs.addDog('fluffer');
  }, []);

  const grow = () => {
    console.log(ref);
    ref.current.style.fontSize = '100px';
    ref.current = ref2.current;
  }

  return (
    <div>
      <Route path={`${props.match.url}/another`}></Route>
      <button onClick={grow}>grow</button>
      <h1 ref={ref}>Contact Us</h1>
      <h2 ref={ref2} >📱: 123-456-780</h2>
      <h2>📨: react@react.com</h2>
      <h2> 🏬: 123 superstreet</h2>
      <h3> these are all our dogs: <span>{dogs.dogs}</span></h3>
       <Route path="/home/me" component={() => (<h1>me</h1>)} />
    </div>
  );
};

export default Contact;