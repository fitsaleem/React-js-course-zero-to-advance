import React, { useState } from "react";
import "./AddVideo.css";

function AddVideo({AddYoutubeVideo}) {
  const [video, setVideo] = useState({
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
    name:"",
    views:""

  });
  function handlerSubmit(e) {
    e.preventDefault();
    console.log(video)
    AddYoutubeVideo(video)
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }
  return (
    <form>
      <input
        type="text"
        name="name"
        onChange={handleChange}
        placeholder="title"
      ></input>
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
      ></input>
      <div className="playbutton">
        <button
          onClick={handlerSubmit}
        >
          Add Videos
        </button>
      </div>
    </form>
  );
}

export default AddVideo;
