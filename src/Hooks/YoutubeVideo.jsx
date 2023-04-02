import youTubeVideosContext from "../context/youtubeVideosContext";
import { useContext } from "react";

function useYoutubeVideo(){
    return useContext(youTubeVideosContext)
}

export default useYoutubeVideo;