import "./App.css";
// import Videos from "./mycomponents/Videos";
import videoDB from "./youtube-video-data/Data";
import React, { useState } from "react";
// import PlayButton from "./mycomponents/playButton";
import Counter from "./mycomponents/Counter";
import AddVideo from "./mycomponents/AddVideo";
import VideoList from "./mycomponents/VideoList";

let center = "center";

function App({ Title }) {
  console.log("render App component")
  const [youtubeVideos, setYoutubeVideos] = useState(videoDB);

  function AddYoutubeVideo(video){
    setYoutubeVideos([...youtubeVideos,{...video,id: youtubeVideos.length+1}])
  }
  return (
    <>
      <div className={center}> {Title}</div>
      <AddVideo AddYoutubeVideo={AddYoutubeVideo}></AddVideo>
<VideoList youtubeVideos={youtubeVideos}></VideoList>

      <Counter></Counter>
    </>
  );
}

export default App;
