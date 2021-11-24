//step 1 : Import react
import * as React from "react";
import { Link } from 'gatsby';
import Post from './example.mdx'
import Syntax from './syntax.mdx'
import { MDXProvider } from "@mdx-js/react"
import codeblock from "./codeblock";
import Highlight, {defaultProps} from 'prism-react-renderer'
// import {compile} from '@mdx-js/mdx'
// import rehypeHighlight from 'rehype-highlight'


//step 2: define your component 
const IndexPage = () => {
  var hi = 0;

  const components = { //코드 스타일링
    code: codeblock,
  };

  return(
    <main>
      <title>Home Page${hi}</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making thist by following gatsby tuto</p>
      <MDXProvider components={components}>
        <Syntax/>
      </MDXProvider>
      {/* <Post components={{code}}/> */}
      
    </main>
    
  )
}
//step3 export 
export default IndexPage; 

// console.log(Post.title);



