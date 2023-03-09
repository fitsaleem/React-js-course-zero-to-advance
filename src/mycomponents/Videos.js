import "./Videos.css";
import React from "react";
import "./Videos.css";

const Videos = ({ Name, Views, time, tick = true , image , children}) => {
  let channelName = "fitcodding";
  console.log("render Video component")
  return (
    
    <>
      <div className="image">
        <div>
         {image}
        </div>
        {/* first method */}
        {/* {tick ?(
          <div>
            {channelName} <span className="tick">&#10004;</span>
          </div>
        ) : (
          <div>{channelName}</div>
        )} */}

        {/* second method */}

        <div>
            {channelName} <span className="tick"> {tick ? "✔" : null } </span>
          </div>

        <div> {Name} </div>
        <div className="videoDetails">
          <div>
            Views: {Views} . {time}
          </div>
        </div>
        {children}
      </div>

     
    </>
    
  );
};
export default Videos;
