import * as React from "react";
import { Link } from 'gatsby';
import Post from '../md/example.mdx'
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';

// @font-face {
//   font-family: "NanumSquareR";
//   src: url("../assets/font/NanumSquareR.ttf") format("truetype");
//   }
//   font-family: 'NanumSquareR';

const IndexPage = () => {
  const components = { //코드 스타일링
    code: CodeBlock,
  };

  return(
    <main>  
      <title>개발중입니다..</title>
      <h1>개발중입니다...</h1>
      <Link to="/about">About</Link>
      <p>I'm making thist by following gatsby tuto</p>
      <MDXProvider components={components} >
        <Post/>
      </MDXProvider>
    </main>
  )
}
//step3 export 
export default IndexPage; 




