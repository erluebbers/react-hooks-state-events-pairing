import React, {useState} from "react"
import video from "../data/video.js"
import DisplayComment from "./DisplayComment"

function Comments() {
  const [displayComments, setDisplayComments] = useState(true)

  function handleComments() {
    setDisplayComments(!displayComments)
  }

  return (
    <div>
      <button onClick={handleComments}>{displayComments ? "Hide Comments" : "Show Comments"}</button>
      <hr></hr>
      <div style={{ display: displayComments ? null : "none" }} >
        <DisplayComment posts={video.comments}/>
      </div>
    </div>
  );
}

export default Comments;