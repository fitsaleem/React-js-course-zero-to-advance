import "./App.css";
import Videos from "./mycomponents/Videos";
import videoDB from "./youtube-video-data/Data";
import React, { useState } from "react";
import PlayButton from "./mycomponents/playButton";
import Counter from "./mycomponents/Counter";
import AddVideo from "./mycomponents/AddVideo";

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

      <div className="container">
        {youtubeVideos.map((video) => (
          <Videos
            key={video.id}
            name={video.name}
            views={video.views}
            time={video.time}
            tick={video.tick}
            image={video.image}
          >
            {" "}
            <PlayButton
              onPlay={() => console.log("play now")}
              onPause={() => console.log("pause now")}
            >
              {video.name}
            </PlayButton>
          </Videos>
        ))}
        {/* <PlayButton  onSmash={()=>console.log("play now ")} >play</PlayButton>
        <PlayButton  onSmash={()=>alert("pause now ")}>pause</PlayButton> */}
      </div>
      <Counter></Counter>
    </>
  );
}

export default App;
