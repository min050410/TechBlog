import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';
import NotFoundPage from "./404" 


const Postimport = ({ location }) => {
    const product = location.state.fromFeed.toString()
    const Postitem = require(`../md/${product.toString()}.mdx`).default
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