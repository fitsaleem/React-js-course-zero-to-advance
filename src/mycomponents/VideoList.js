import Videos from "./Videos"
import PlayButton from "./playButton"

function VideoList({youtubeVideos}){
    return(
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
      </div>
    )
}

export default VideoList