import "./App.css";
// import Videos from "./mycomponents/Videos";
import videoDB from "./youtube-video-data/Data";
import React, { useReducer, useState } from "react";
// import PlayButton from "./mycomponents/playButton";

import AddVideo from "./mycomponents/AddVideo";
import VideoList from "./mycomponents/VideoList";


let center = "center";

function App({ Title }) {
  console.log("render App component")

  // const [youtubeVideos, setYoutubeVideos] = useState(videoDB);
  const [editableVideo, setEditableVideo] = useState(null)
  const [youtubeVideos,dispatch]=useReducer(videoReducer,videoDB)
  

  function videoReducer(youtubeVideos,action){
switch (action.type) {
  case "ADD":
    
   return [...youtubeVideos,{...action.payload,id: youtubeVideos.length+1}]

  case "REMOVE":
    return youtubeVideos.filter(video=>video.id!==action.payload)

  case "EDIT":
    const index=youtubeVideos.findIndex(v=>v.id===action.payload.id)
    const newVideo=[...youtubeVideos]
    newVideo.splice(index,1,action.payload)
    setEditableVideo(null)
    return   newVideo


    
   

  default:
    return youtubeVideos 
}
  }

  // function AddYoutubeVideo(video){
  //   dispatch({type: "ADD",payload: video})
  // } is ko hum ne prop me pass kr diya direct ab
  
  // function removeVideo(id){
  //   console.log(id)
  //   dispatch({type: "REMOVE",payload: id})
  //   // setYoutubeVideos(youtubeVideos.filter(video=>video.id!==id))
  // }

  function updateVideo(id){
   setEditableVideo((youtubeVideos.find(video=>video.id===id)))
  
  }

  // function editVideo(video){
  //   dispatch({type: "EDIT",payload: video})
    // const index=youtubeVideos.findIndex(v=>v.id===video.id)
    // const newVideo=[...youtubeVideos]
    // newVideo.splice(index,1,video)
    // setYoutubeVideos(newVideo)
  // }

  return (
    <>
      <div className={center}> {Title}</div>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
<VideoList youtubeVideos={youtubeVideos} dispatch={dispatch} updateVideo={updateVideo}></VideoList>

      
    </>
  );
}

export default App;
