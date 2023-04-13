import Videos from "./Videos";
import PlayButton from "./playButton";
import useYoutubeVideo from "../Hooks/YoutubeVideo";
// import axios from "axios";
// import { useState } from "react";

function VideoList({ updateVideo }) {

  const youtubeVideos = useYoutubeVideo();
  // this for fatching data 
  //  const [youtubeVideos , setyoutubeVideos]= useState([])
  // const url="https://my.api.mockaroo.com/data1.json?key=d050e840"

  // async function handler(){
  //  const response= await axios.get(url)
  //   console.log("get videos" , response.data)
  //   setyoutubeVideos(response.data)
  // }

  return (
    <>
    <div className={`container`}>
      {youtubeVideos.map((video) => (
        <Videos
          key={video.id}
          name={video.name}
          views={video.views}
          time={video.time}
          tick={video.tick}
          image={video.image}
          updateVideo={updateVideo}
          id={video.id}
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
    </div>
    {/* <button onClick={handler}>fatch data</button> */}
    </>
  );
}

export default VideoList;
