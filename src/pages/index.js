//step 1 : Import react
import * as React from "react";
import { Link } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
// import Content from '.youngmin/src/pages/example.mdx'
// import PageLayout from './src/md/example';

//step 2: define your component 
const IndexPage = () => {
  var hi = 0;
  
  return(
    <main>
      <title>Home Page${hi}</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making thist by following gatsby tuto</p>
      
    </main>
  )
}
//step3 export 
export default IndexPage; 


