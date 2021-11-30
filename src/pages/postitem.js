import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';
import NotFoundPage from "./404" 
// import Post from '../md/example.mdx'

const Postimport = ({ location }) => {
    // const item = require(`../md/${location.state.fromFeed}`)
    if(typeof location.state.fromFeed !== 'undefined'){
        const Postitem = require(`../md/${location.state.fromFeed}.mdx`).default
        const components = { //코드 스타일링
            code: CodeBlock,
        };
    return(
        <MDXProvider components={components} >
        <Postitem/>
        </MDXProvider>
        )
    }
    else{
        return(<NotFoundPage/>)
    }
}
export default Postimport;  