import "./Videos.css";
// import React, { useContext } from "react";
// import dispatchYoutubeVideosContext from "../context/dispatchVideosContext";
import useYoutubeVideoDispatch from "../Hooks/YoutubeVideoDispatch";



const Videos = ({ name, views, time, tick = true , image , children  ,id,updateVideo}) => {
  
  // const dispatch=useContext(dispatchYoutubeVideosContext)
  const dispatch=useYoutubeVideoDispatch() // this is custom hook
  
  
  let channelName = "fitcodding";
  console.log("render Video component")

  
  return (
    
    <>

    

      <div className="image">
        <div>
         {image}
        </div>
        <button className="remove" onClick={()=>{ dispatch({type: "REMOVE",payload: id})}}>X</button>
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
