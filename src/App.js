import "./App.css";
import Videos from "./mycomponents/Videos";
import youtubeVideos from "./youtube-video-data/Data";
import React from "react";
import PlayButton from "./mycomponents/playButton";
import Counter from "./mycomponents/Counter";

let center = "center";

function App({ Title }) {
  return (
    <>
      <div className={center}> {Title}</div>
      <div className="container">
        {youtubeVideos.map((video) => (
          <Videos
            key={video.id}
            Name={video.Name}
            Views={video.Views}
            time={video.time}
            tick={video.tick}
            image={video.image}
          >
            {" "}
            <PlayButton
              onPlay={() => console.log("play now")}
              onPause={() => console.log("pause now")}
            >
              {video.Name}
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
