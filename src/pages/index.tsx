import * as React from "react";
import { Link } from 'gatsby';
import { useState } from 'react';

//components
import posts from '../md/indexpost'
import Header from '../components/header'

//styles
import '../styles/card.sass';

const IndexPage = () => {
  const [isHover, setHover] = useState(false);
  const [ID, setID] = useState(-1);

  const postlist = posts.map((post) => 
  // setID(post.id),
  (
    <div className="card">
      <div className="imgbox">
        <img
          src={require(`../assets/images/${post.img}.png`).default}
          alt={post.img}
          // onMouseOver={() => setHover(true)}
          onMouseOver={function(){
            setHover(true)
            setID(post.id)
          }}
          onMouseOut={function(){
            setHover(true)
            setID(-1)
          }}
        />
        {(isHover && ID==post.id)?<img className="copylink" src={require(`../assets/images/copylink.png`).default}></img>:null}
      </div>
      <Link to="postitem/" state={{ myProp: post.filename }}>
        <h3>{post.title}</h3>
        {/* <span>{post.tag}</span>
        { (post.tag2) ? <span>{post.tag2}</span> : null }
        { (post.tag3) ? <span>{post.tag3}</span> : null } */}
      </Link>
    </div>
  ));

  return (
    <main>
      <head>
        <title>dev-log</title>
      </head>
      <body>
        <Header />
        <div className="popular">인기있는 포스트</div>
        <div className="container">
          {postlist}
          {/* {(posts[posts.length - 1].id) % 2 === 1 ?
          (<Link to="#">
            <div className="card">
            </div>
          </Link>) : null} */}
        </div>
      </body>
    </main>
  )
}

export default IndexPage;




