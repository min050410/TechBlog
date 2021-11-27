//step 1 : Import react
import * as React from "react";
import { Link } from 'gatsby';
import styled from "styled-components";
import Post from './example.mdx'
import PostStyle from '../components/styles/postStyle';
// import Syntax from './syntax.mdx'
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./codeblock";

//step 2: define your component
const PostContentSection = styled.section`
  margin-top: 60px;
  ${PostStyle};
`;
// @font-face {
//   font-family: "NanumSquareR";
//   src: url("../assets/font/NanumSquareR.ttf") format("truetype");
//   }
//   font-family: 'NanumSquareR';


const IndexPage = () => {
  var hi = 0;
  const components = { //코드 스타일링
    code: CodeBlock,
  };

  return(
    <main>  
      <title>Home Page${hi}</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making thist by following gatsby tuto</p>
      <PostContentSection>
      <MDXProvider components={components} >
        <Post/>
      </MDXProvider>
      </PostContentSection>
    </main>
  )
}
//step3 export 
export default IndexPage; 




