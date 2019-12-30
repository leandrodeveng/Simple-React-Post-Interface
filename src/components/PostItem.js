import React from 'react';
import CommentItem from './CommentItem';

function PostItem ({ post }) {
  return(
  <li key = {post.id}>
    <div id = "postContainer">
      <div>
        <img id = "postimg" src = {post.author.avatar}/>
        <div id = "div2">  
          <p id = "author">{post.author.name} </p>
          <p id = "date">{post.date}</p>
        </div>
      </div>
      <p id = "content">{post.content}</p>
      {post.comments.map(comment => <CommentItem key = {comment} comment = {comment}/>)}
    </div> 
  </li>
)};

export default PostItem;