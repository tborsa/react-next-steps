import React, {useState, useEffect} from 'react';
// import {Route} from 'react-router-dom';

const HelloButton = (props) => {
  const [count, setCount] = useState(0);

    let spamMsg = '';
  useEffect(() => {
    for (let i = 0; i < count; i++) {
      spamMsg += <h4>Hi!</h4>
    }
  }, [count]);

  return (
    <>
    <button onClick={()=>setCount(prev=>((prev+1)%4))}>Hello</button>
    {spamMsg}
    </>
  );
};

export default HelloButton;