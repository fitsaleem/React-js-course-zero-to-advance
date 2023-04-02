import { useState } from "react";
import "../mycomponents/playButton.css";

function PlayButton({ children, onPlay, onPause }) {
  console.log("render playButton component");
  const [playing, setPlaying] = useState(false);

  function handlerbutton(e) {
    e.stopPropagation(); // alway use this event object for handle event bubbling

    if (playing) {
      onPlay();
    } else {
      onPause();
    }
    setPlaying(!playing);
  }
  return (
    <div className="playbutton">
      <button onClick={handlerbutton}>
        {playing ? children + "⏯️" : children + "⏸️"}
      </button>
    </div>
  );
}

export default PlayButton;
