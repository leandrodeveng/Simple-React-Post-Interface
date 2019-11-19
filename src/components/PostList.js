import React, { Component } from 'react';
import Header from './Header';
import PostItem from './PostItem';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
            },
            content: "Comentariozãoooooooooooooooooooooooooooooo"
          }
        ]
      },{
        id: 2,
        author: {
          name: "Leandro Trindade",
        },
        date: "07 Jun 2019",
        content: "Teste Comment",
        comments: [
          {
            id: 2 ,
            author: {
              name: "Diego Fernandes",
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
    ]
  };

  render() {
    return (
      <div id = "appContainer">
        <Header />
        <ul id = "container">
          {this.state.posts.map(post => <PostItem key = {post} post = {post}/>)}
        </ul>
      </div>
    )
  };
};

export default PostList;