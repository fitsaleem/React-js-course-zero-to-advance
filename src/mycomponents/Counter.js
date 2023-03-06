import { useState } from "react";
import "./Counter.css";

function Counter() {
  const [number, setNumber] = useState(0);

  function incrementButton(e) {
    e.stopPropagation();
     return setNumber(number + 1) //, console.log(number);
  }
  function decrementButton(e) {
    e.stopPropagation();
    if(number>0){
   setNumber(number=>number - 1)// updater function style //this is preferd
  }}
  return (
    <>
      <h1>COUNTER APP</h1>
      <div className="counter">
        <div className="playbutton">
          <button onClick={incrementButton}>Increment</button>
        </div>
        <div className="number">
          <h3>{number}</h3>
        </div>

        <div className="playbutton">
          <button onClick={decrementButton}>Decrement</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
