import "./Videos.css";
import React from "react";


const Videos = ({ name, views, time, tick = true , image , children}) => {
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

        <div> {name} </div>
        <div className="videoDetails">
          <div>
            Views: {views} . {time}
          </div>
        </div>
        {children}
      </div>

     
    </>
    
  );
};
export default Videos;
