import * as React from "react";
import { Link } from 'gatsby';
import posts from '../md/indexpost'
import Header from './components/header'
import './styles/index.sass';
import './styles/card.sass';


const IndexPage = () => {

  const postlist = posts.map((post) =>
  (
    <Link to="postitem/" state={{ myProp: post.filename }}>
      <div className="card">
        <img src={require(`../assets/images/${post.img}.png`).default} alt={post.img} />
        <h3>{post.title}</h3>
        <span>{post.tag}</span>
        <span>{post.tag2}</span>
        <span>{post.tag3}</span>
      </div>
    </Link>
  ));

  return (


    <main>
      <Header/>
      <title>개발중입니다..</title>
      <div class="container">
        {postlist}
        {(posts[posts.length - 1].id) % 2 === 1 ?
          (<Link to="#">
            <div className="card">
            </div>
          </Link>) : null}
      </div>
    </main>
  )
}
//step3 export 
export default IndexPage;




