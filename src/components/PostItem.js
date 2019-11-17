import React from 'react';
import CommentItem from './CommentItem';

function PostItem ({ post }) {
  return(
  <li key = {post.id}>
    <ul id = "postContainer">
      <li>{post.author.name}</li> <br/>
      <li>{post.date}</li>  <br/>
      <li>{post.content}</li> <br/>
      {post.comments.map(comment => <CommentItem key = {comment} comment = {comment}/>)}
    </ul>
  </li>
)};

export default PostItem;