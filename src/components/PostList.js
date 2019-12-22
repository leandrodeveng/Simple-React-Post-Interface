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
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZbNbSavCny0Y9Ztsq43CaTL5kiqv5-meOgOl2ESslHvrrONH"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZbNbSavCny0Y9Ztsq43CaTL5kiqv5-meOgOl2ESslHvrrONH"
            },
            content: "Comentariozãoooooo"
          }
        ]
      },{
        id: 2,
        author: {
          name: "Leandro Trindade",
          avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZbNbSavCny0Y9Ztsq43CaTL5kiqv5-meOgOl2ESslHvrrONH"
        },
        date: "07 Jun 2019",
        content: "Teste Comment",
        comments: [
          {
            id: 2 ,
            author: {
              name: "Diego Fernandes",
              avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjZbNbSavCny0Y9Ztsq43CaTL5kiqv5-meOgOl2ESslHvrrONH"
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