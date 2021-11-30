import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';
// import Post from '../md/example.mdx'

const Postimport = ({ location }) => {
    // const item = require(`../md/${location.state.fromFeed}`)
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
export default Postimport;  