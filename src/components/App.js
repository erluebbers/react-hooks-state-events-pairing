import React from "react"
import video from "../data/video.js";
import Info from "./Info"
import LikeButtons from "./LikeButtons"
import Comments from "./Comments"


function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Info />
      <LikeButtons />
      <Comments />
    </div>
  );
}

export default App;
