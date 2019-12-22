import React from 'react';

function CommentItem({ comment }) {
  return(
    <li key = {comment.id}>
      <li id = "commentAvatar"> <img id = "commentimg" src = {comment.author.avatar}/> </li>
      <ul id = "commentContainer">
        <li id = "commentName">{comment.author.name}</li>
        <li id = "commentContent">{comment.content}</li> <br/>
      </ul>
    </li>
)};

export default CommentItem;