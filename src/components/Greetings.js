import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreetings } from '../store/createSlice';

const Greeting = () => {
  const dispatch = useDispatch();

  const randomGreetings = () => {
    dispatch(fetchGreetings());
  };

  useEffect(() => {
    randomGreetings();
  }, []);

  const { greetings } = useSelector((state) => state.greetings);
  return (
    <div className="parent-div">
      <div className="greeting-div">
        <p className="greetings">{ greetings }</p>
        <button type="button" onClick={() => randomGreetings()} className="btn">Generate new message</button>
      </div>
    </div>
  );
};

export default Greeting;
