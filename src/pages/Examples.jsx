import React, { useState, useEffect } from 'react';
import randomColor from 'randomcolor';

function Examples() {
    const [count, setCount] = useState(0);

    const [userName, setUserName] = useState("Jeram");

    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    const [color, setColor] = useState("");

    const toggle = () => {
        setIsActive(!isActive);
    };

    const reset = () => {
        setSeconds(0);
        setIsActive(!isActive);
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds + 1);
            }, 100);
        } else if (isActive && seconds !== 0 ) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    },
    [isActive, seconds]
    );

  return (
    <div>
      <h1>React Hooks</h1>

      <h2>Timer (in seconds): {seconds}</h2>

      <button onClick={toggle}>Start timer</button>
      <button onClick={reset}>Reset</button>
      
      <h2>Hi, this is user: {userName}</h2>

      <input
       type="text"
       name={userName}
       value={userName}
       onChange={(event) => setUserName(event.target.value)}
         />

      <p>Click Count: {count}</p>

      <button onClick={() => setCount(count + 1) }>Click me!</button>
    </div>
  )
}

export default Examples;
