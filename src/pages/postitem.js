import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';
import NotFoundPage from "./404" 


const Postimport = ({ location }) => {
    if(location.state.myProp===undefined){
        return(<div>undefined</div>)
    }
    else{
    const agentProp = location.state.myProp
    const Postitem = require(`../md/${agentProp}.mdx`).default
    const components = { //코드 스타일링
        code: CodeBlock,
    };
    return(
        <MDXProvider components={components} >
        <Postitem/>
        </MDXProvider>
    )
    }
}
    
export default Postimport;  