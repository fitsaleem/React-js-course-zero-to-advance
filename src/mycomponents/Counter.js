import { useState } from "react";
import "./Counter.css";

function Counter() {
  function handlerButton() {
    const [number, setNumber]=useState(0);
    return (setNumber+1), console.log(number);
  }
  return (
    <>
      <h1>COUNTER APP</h1>
      <div className="counter">
        <div className="playbutton">
          <button onClick={handlerButton}>Increment</button>
        </div>
        <h3>{number}</h3>
        <div className="playbutton">
          <button onClick={handlerButton}>Decrement</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
