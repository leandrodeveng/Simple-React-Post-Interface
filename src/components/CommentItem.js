import React from 'react';

function CommentItem({ comment }) {
  return(
    <li key = {comment.id}>
      <div class = "commentContent">
        <img id = "commentimg" src = {comment.author.avatar}/>
        <ul id = "commentContainer">
          <li id = "commentName">{comment.author.name}</li>
          <li id = "commentContent">{comment.content}</li>
        </ul>
      </div>
    </li>
)};

export default CommentItem;