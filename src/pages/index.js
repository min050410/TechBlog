import * as React from "react";
import { Link } from 'gatsby';
import posts from '../md/indexpost'
import './styles/index.sass';


const IndexPage = () => {

  const postlist = posts.map((post)=>
  (
    <Link to="postitem" state={{ myProp: String(post.filename) }} className="whatev">
    <div className="card">
    <h3>{post.title}</h3> 
    <img src={require(`../assets/images/${post.img}.png`).default} width="200px"/>
    <span>{post.tag}</span>
    <span>{post.tag2}</span>
    <span>{post.tag3}</span>
    </div>
    </Link>
  ));

  return(
    <main>  
      <title>개발중입니다..</title>
      {postlist}
      <h2>개발중입니다... 업데이트 11/30</h2>
    </main>
  )
}
//step3 export 
export default IndexPage; 




