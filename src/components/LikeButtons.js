import React, {useState} from "react"
import video from "../data/video.js"

function LikeButtons() {
  const [like, setLike] = useState(video.upvotes)
  const [dislike, setDislike] = useState(video.downvotes)
  
  function handleLike() {
    setLike(like + 1)
  }

  function handleDislike() {
    setDislike(dislike - 1)
  }

  return (
    <div>
      <button onClick={handleLike}>{like}👍</button><button onClick={handleDislike}>{dislike}👎</button>
    </div>
  );
}

export default LikeButtons;