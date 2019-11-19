import React from 'react';

function CommentItem({ comment }) {
  return(
    <li key = {comment.id}>
      <ul id = "commentContainer">
        <li id = "commentName">{comment.author.name}</li> <br/>
        <li id = "commentContent">{comment.content}</li> <br/>
      </ul>
    </li>
)};

export default CommentItem;