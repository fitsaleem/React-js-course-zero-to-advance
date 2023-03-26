import "./Videos.css";
import React from "react";


const Videos = ({ name, views, time, tick = true , image , children ,removeVideo ,id,updateVideo}) => {
  let channelName = "fitcodding";
  console.log("render Video component")
  return (
    
    <>

    

      <div className="image">
        <div>
         {image}
        </div>
        <button className="remove" onClick={()=>{removeVideo(id)}}>X</button>
        <button className="edit" onClick={()=>{updateVideo(id)}}>edit</button>

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
