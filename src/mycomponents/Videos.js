import "./Videos.css";

import React from "react";

import "./Videos.css";
const Videos = ({ Name, Views, time }) => {
  let channelName = "fitcodding";
  return (
    <>
      <div className="image">
        <div>
        <iframe width="250" height="150" src="https://www.youtube.com/embed/NJ-he3DBpCE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

        <div> {Name} </div>
        <div className="videoDetails">
          <div>{channelName}</div>
          <div>
            Views: {Views} . {time}
          </div>
        </div>
      </div>
    </>
  );
};
export default Videos;
