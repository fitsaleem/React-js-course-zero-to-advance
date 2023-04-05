import React, { useEffect, useRef, useState } from "react";
import useYoutubeVideoDispatch from "../Hooks/YoutubeVideoDispatch";
import "./AddVideo.css";

let initialAddVideo = {
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
  time: "1 years",
  tick: true,
  name: "",
  views: "",
};

function AddVideo({ editableVideo }) {
  const dispatch = useYoutubeVideoDispatch();

  const [video, setVideo] = useState(initialAddVideo);
  const inputRef= useRef(null)

  function handlerSubmit(e) {
    
    e.preventDefault();
    if (editableVideo) {
      dispatch({ type: "EDIT", payload: video });
    } else {
      dispatch({ type: "ADD", payload: video });
    }

    setVideo(initialAddVideo); // use for clean from
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    
    if (editableVideo) {
      setVideo(editableVideo);
    }
    inputRef.current.focus();
  }, [editableVideo]);

  return (
    <form className="form-container">
      <input
      ref={inputRef}
        className="form-input"
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="title"
        value={video.name} //control form
      ></input>
      <input
        className="form-input"
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      ></input>
      <div className="playbutton">
        <button className="form-submit" onClick={handlerSubmit}>
          {editableVideo ? "Edit" : "Add"} Video
        </button>
      </div>
    </form>
  );
}

export default AddVideo;
