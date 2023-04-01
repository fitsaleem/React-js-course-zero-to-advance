import Videos from "./Videos"
import PlayButton from "./playButton"

function VideoList({youtubeVideos , dispatch,updateVideo}){
    return(
        <div className="container ${">
        {youtubeVideos.map((video) => (
          <Videos
            key={video.id}
            name={video.name}
            views={video.views}
            time={video.time}
            tick={video.tick}
            image={video.image}
            dispatch={dispatch}
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
    )
}

export default VideoList