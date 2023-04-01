import "./App.css";
import videoDB from "./youtube-video-data/Data";
import React, { useReducer, useState } from "react";
import AddVideo from "./mycomponents/AddVideo";
import VideoList from "./mycomponents/VideoList";
import ThemeContext from "./context/themChange";

function App({ Title }) {
  console.log("render App component");

  const [editableVideo, setEditableVideo] = useState(null);
  const [youtubeVideos, dispatch] = useReducer(videoReducer, videoDB);
  const [mode, setMode] = useState("dark");

  function videoReducer(youtubeVideos, action) {
    switch (action.type) {
      case "ADD":
        return [
          ...youtubeVideos,
          { ...action.payload, id: youtubeVideos.length + 1 },
        ];

      case "REMOVE":
        return youtubeVideos.filter((video) => video.id !== action.payload);

      case "EDIT":
        const index = youtubeVideos.findIndex(
          (v) => v.id === action.payload.id
        );
        const newVideo = [...youtubeVideos];
        newVideo.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideo;

      default:
        return youtubeVideos;
    }
  }

  //  const theme = useContext(ThemeContext)
  //  console.log({theme})

  function updateVideo(id) {
    setEditableVideo(youtubeVideos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <div className={`${mode}`}>
        <div className="center"> {Title}</div>
        <div className="modebutton center">
          <button onClick={() => setMode(mode === "dark" ? !mode : "dark")}>
            {mode === "dark" ? "light " : "dark "}mode
          </button>
        </div>

        <AddVideo dispatch={dispatch} editableVideo={editableVideo}></AddVideo>
        <VideoList
          youtubeVideos={youtubeVideos}
          dispatch={dispatch}
          updateVideo={updateVideo}
        ></VideoList>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
