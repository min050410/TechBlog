import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "./components/codeblock";
import './styles/index.sass';
import NotFoundPage from "./404"
import "./styles/postitem.sass"
import Header from './components/header'


const Postimport = ({ location }) => {
    if (location.state === undefined) {
        return (<NotFoundPage />)
    }
    else {
        const Postitem = require(`../md/${location.state.myProp}.mdx`).default
        const components = {
            code: CodeBlock,
        };
        return (
            <main>
                <title>{location.state.myProp}</title>
                <Header/>
                <div class="middle">
                    <MDXProvider components={components} >
                        <Postitem/>
                    </MDXProvider>
                </div>
            </main>
        )
    }
}

export default Postimport;