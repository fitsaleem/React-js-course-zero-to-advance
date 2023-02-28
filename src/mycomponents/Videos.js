import "./Videos.css";

import React from "react";

import "./Videos.css";
const Videos = ({ Name, Views, time, tick = true }) => {
  let channelName = "fitcodding";
  return (
    <>
      <div className="image">
        <div>
          <iframe
            width="250"
            height="150"
            src="https://www.youtube.com/embed/NJ-he3DBpCE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        {/* first method */}
        {/* {tick ?(
          <div>
            {channelName} <span className="tick">&#10004;</span>
          </div>
        ) : (
          <div>{channelName}</div>
        )} */}

        {/* second method */}

        <div>
            {channelName} <span className="tick"> {tick ? "✔" : null } </span>
          </div>

        <div> {Name} </div>
        <div className="videoDetails">
          <div>
            Views: {Views} . {time}
          </div>
        </div>
      </div>
    </>
  );
};
export default Videos;
