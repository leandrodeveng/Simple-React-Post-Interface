import React from 'react';

function CommentItem({ comment }) {
  return(
    <li key = {comment.id}>
      <ul id = "commentContainer">
        <li>{comment.author.name}</li> <br/>
        <li>{comment.content}</li> <br/>
      </ul>
    </li>
)};

export default CommentItem;