import * as React from "react";
import { Link } from 'gatsby';
import posts from '../md/indexpost'
import Post from '../md/example.mdx'
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';


const IndexPage = () => {

  const postlist = posts.map((post)=>
  (
    <Link to="postitem">
    <div className="card">
    <h3>{post.title}</h3> 
    <img src={require(`../assets/images/${post.img}.png`).default} width="200px"/>
    <span>{post.tag}</span>
    <span>{post.tag2}</span>
    <span>{post.tag3}</span>
    </div>
    </Link>
  ));

  const components = { //코드 스타일링
    code: CodeBlock,
  };


  return(
    <main>  
      <title>개발중입니다..</title>
      {postlist}
      <h2>개발중입니다...</h2>
      <MDXProvider components={components} >
        <Post/>
      </MDXProvider>
    </main>
  )
}
//step3 export 
export default IndexPage; 




