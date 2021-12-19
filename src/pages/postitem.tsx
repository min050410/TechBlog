import * as React from "react";
import { MDXProvider } from "@mdx-js/react"
import CodeBlock from "../components/codeblock";
import Header from '../components/header'
import PostComment from '../components/comment'
import { useEffect } from 'react';
import { navigate } from 'gatsby';
import { Link } from 'gatsby';
import NotFoundPage from "./404"

//styles
import "../styles/postitem.sass"
import '../styles/index.sass';

const Postimport = ({ location }) => {
    if(location.search === undefined){
        return(<NotFoundPage/>)
    }
    else if(location.search == null ){
        return(<NotFoundPage/>)
    }
    else {
        const params = new URLSearchParams(location.search);
        const filename = params.get("name");
        const Postitem = require(`../md/${filename}.mdx`).default
        const components = {
            code: CodeBlock,
        };
        return (
            <main>
                <title>{filename}</title>
                <Header />
                <div className="middle">
                    <div className="left">
                        <MDXProvider components={components} >
                            <Postitem />
                        </MDXProvider>
                    </div>
                </div>
                <PostComment />
            </main>
        )
    }
}

export default Postimport;