import "./App.css";
import Videos from "./mycomponents/Videos";
import videoDB from "./youtube-video-data/Data";
import React, { useState } from "react";
import PlayButton from "./mycomponents/playButton";
import Counter from "./mycomponents/Counter";

let center = "center";

function App({ Title }) {
  const [youtubeVideos, setYoutubeVideos] = useState(videoDB);
  return (
    <>
      <div className={center}> {Title}</div>

      <div className="playbutton">
        <button
          onClick={() => {
            setYoutubeVideos([
              ...youtubeVideos,
              {
                id: youtubeVideos.length+1,
                image: (
                  <>
                    <iframe
                      width="250"
                      height="150"
                      src="https://www.youtube.com/embed/NJ-he3DBpCE"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                    ></iframe>
                  </>
                ),
                Name: "react-js course for bignners",
                Views: "500K",
                time: "1 years",
                tick: true,
              },
            ]);
          }}
        >
          Add Videos
        </button>
      </div>

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
