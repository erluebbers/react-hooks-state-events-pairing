import React from "./Info"
import video from "../data/video.js"

function Info() {
  
  return (
    <div>
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
    </div>
  );
}

export default Info;