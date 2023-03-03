import "./App.css";
import PlayButton from "./mycomponents/playButton";
import Videos from "./mycomponents/Videos";
import youtubeVideos from "./youtube-video-data/Data";


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
          ></Videos>
        ))}
         <PlayButton></PlayButton>
      </div>
    
     
      
      </>
  );
}

export default App;
