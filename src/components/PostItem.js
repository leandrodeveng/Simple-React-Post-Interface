import React from 'react';
import CommentItem from './CommentItem';

function PostItem ({ post }) {
  return(
  <li key = {post.id}>
    <ul id = "postContainer">
    <li id = "avatar"> <img id = "postimg" src = {post.author.avatar}/> </li>
      <li id = "author">{post.author.name}</li> <br/>
      <li id = "date">{post.date}</li>  <br/>
      <li id = "content">{post.content}</li> <br/>
      {post.comments.map(comment => <CommentItem key = {comment} comment = {comment}/>)}
    </ul> 
  </li>
)};

export default PostItem;