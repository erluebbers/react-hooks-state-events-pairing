import React, {useState} from "react"

function DisplayComment( {posts} ) {
  const listedPosts = posts.map(post => {
    return(
      <div key={post.id}>
        <h3>{post.user}</h3>
        <p>{post.comment}</p>
      </div>
    )
  })
  
  return (
    <div>
      {listedPosts}
    </div>
  );
}

export default DisplayComment