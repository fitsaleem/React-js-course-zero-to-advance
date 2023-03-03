import "./Videos.css";

import React from "react";

import "./Videos.css";
const Videos = ({ Name, Views, time, tick = true , image}) => {
  let channelName = "fitcodding";
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
      </div>
     
    </>
    
  );
};
export default Videos;
