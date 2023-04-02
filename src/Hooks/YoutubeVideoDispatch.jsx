import { useContext } from "react";
import dispatchYoutubeVideosContext from "../context/dispatchVideosContext";


function useYoutubeVideoDispatch(){
    const dispatch=useContext(dispatchYoutubeVideosContext)
    return dispatch 
}

export default useYoutubeVideoDispatch